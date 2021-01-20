from django.shortcuts import render, redirect
from django.views.generic.base import View
from django.db.models import Q
from django.forms.models import model_to_dict
from django.http import HttpResponsePermanentRedirect, HttpResponse, JsonResponse

import os, json, uuid, time
from random import choice, sample
from PIL import Image
import invoice.settings as settings

from Appis.freight.models import Freight, Tag
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
    def get(self, request):

        option = request.GET.get('option', None)

        if option == 'prices':
            print('')
        elif option == 'combine':
            print('combine')

        listing_id = request.GET.get('listing_id', None)
        listing = model_listing.Listing.objects.filter(id = listing_id)
        listing_content = model_listing.ListingContent.objects.filter(listing = listing_id)
        print(listing_id)
        print(listing_content)

        return render(request, 'pdf/invoice.html')
