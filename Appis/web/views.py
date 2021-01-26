from django.shortcuts import render, redirect
from django.views.generic.base import View
from django.db.models import Q
from django.forms.models import model_to_dict
from django.http import HttpResponsePermanentRedirect, HttpResponse, JsonResponse
from django.views.decorators.clickjacking import xframe_options_deny, xframe_options_exempt
from django.http import FileResponse

import io, os, json, uuid, time, datetime
from random import choice, sample
from PIL import Image
import invoice.settings as settings

from Appis.freight.models import Freight, Tag
from Appis.member import models as model_member
from Appis.listing import models as model_listing
from Appis import comp as comp
# Create your views here.
class WebView(View):
    def get(self, request):
        return render(request, 'index.html')

import csv 

def handler_404(request):
    return render(request, 'index.html')

def saveFreight(freight):
    num = freight[0]
    named = freight[1]
    unit = comp.getUnitByCn(freight[2])
    price = freight[3]

    if len(freight) < 4:
        unit = comp.getUnitByCn('')
        price = freight[2]
    
    data = Freight()
    if price:
        data.price = int(price)
    else:
        data.price = ''
    data.num = num
    data.named = named
    data.unit = int(unit)
    n = choice([1, 2, 3])
    ids = sample([1, 2, 3, 4], n)
    
    # tags = Tag.objects.filter(id__in = ids)


    if price:
        data.price = int(price)
    else:
        data.unit = 19

    data.save()
    data.tag.clear()
    for t in ids:
        data.tag.add(t)

    data.save()


def importFreight(_path):
    print(_path)
    res = []
    index = 0
    with open(_path, 'r') as f:
        rec = csv.reader(f)
        # print(rec)
        rec = list(rec)
        rec = rec[1: ]

        for r in rec:
            index += 1
            saveFreight(r)
            if index % 20 == 0:
                time.sleep(0.2)


class ImportView(View):
    _dir = os.path.join(settings.MEDIA_ROOT, 'data')

    def get(self, request):
        return render(request, 'tool/import.html')

    def _loadFile(self):
        typed = 'csv'
        fs = os.listdir(self._dir)
        return [f for f in fs if f.endswith(typed)]

    def post(self, request):
        res = {
            'status': True
        }
        option = request.GET.get('option', None)
        files = self._loadFile()
        files = [ os.path.join(self._dir, f) for f in files]

        if option:
            if option == 'load':
                res['files'] = files

            elif option == 'import':
                named = request.POST.get('named', None)
                if named == 'freight':
                    _file = os.path.join(self._dir, files[0])

                    importFreight(_file)
        
        return JsonResponse(res)

class PdfView(View):
    def ser_payment(self, payment):
        if payment == 0:
            return '支票'
        return '现金'
    
    @xframe_options_exempt
    def get(self, request):
        res = { 
            'status': False
        }
        page = 'pdf/invoice.html'

        option = request.GET.get('option', None)
        try:
            if option == 'prices':
                page = 'pdf/prices.html'
                prices_id = request.GET.get('pcc_id', None)
                print(prices_id)
                if prices_id:
                    prices = model_member.PriceCollect.objects.filter(id = prices_id)
                    print(prices)
                    prices = prices[0]
                    
                    res = {
                        'status': True,
                        'membery': prices.membery,
                        'prices': prices
                    }

            elif option == 'combine':
                page = 'pdf/combine.html'
                res = {
                    'status': True,
                    'createdTimed': datetime.datetime.now()
                }

            else:
                listing_id = request.GET.get('lc_id', None)
                if listing_id:
                    listing = model_listing.Listing.objects.filter(id = listing_id)[0]
                    area = model_member.Area.objects.filter(id = listing.pay_contact_area)
                    
                    res = {
                        'status': True,
                        'membery': listing.membery,
                        'listing': listing,
                        'area': area[0],
                        'payment': self.ser_payment(listing.pay_way)
                    }
        except:
            print('pdf print 出错')
            pass

        return render(request, page, res)

class TestView(View):
    def get(self, request):
        # Create a file-like buffer to receive PDF data.
        buffer = io.BytesIO()

        # Create the PDF object, using the buffer as its "file."
        p = canvas.Canvas(buffer)

        # Draw things on the PDF. Here's where the PDF generation happens.
        # See the ReportLab documentation for the full list of functionality.
        p.drawString(100, 100, "<table width='100'><tr><td>AAA</td></tr><tr><td>AAA</td></tr></table>")

        # Close the PDF object cleanly, and we're done.
        p.showPage()
        p.save()

        # FileResponse sets the Content-Disposition header so that browsers
        # present the option to save the file.
        buffer.seek(0)
        return FileResponse(buffer, as_attachment=True, filename='hello.pdf')
        