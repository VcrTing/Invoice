import json
import time
import datetime
from django import views
from django.shortcuts import render, redirect
from django.views.generic.base import View
from django.http import HttpResponsePermanentRedirect, HttpResponse, JsonResponse
from django.db.models import Q
from django.forms.models import model_to_dict
from django.core import serializers as djSerializer
from django.db import connection 

from . import models
from Appis.member.models import Member
# Create your views here.

class ListingView(View):
    def get(self, request):
        res = {}
        option = request.GET.get('option', None)

        listing = models.Listing.objects.filter(status = True)

        if option:
            if option == 'plus':
                memberId = request.GET.get('member_id', None)
                member = Member.objects.filter(id = memberId)
                res['member'] = member

                return render(request, 'listing/plus/plus.html', res )

        return render(request, 'listing/listing.html', 
            {}
        )
