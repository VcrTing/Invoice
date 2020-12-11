from django.shortcuts import render, redirect
from django.views.generic.base import View
from django.db.models import Q
from django.forms.models import model_to_dict
from django.http import HttpResponsePermanentRedirect, HttpResponse, JsonResponse

import os, json, uuid
from PIL import Image
import invoice.settings as settings


# Create your views here.
class WebView(View):
    def get(self, request):
        return render(request, 'index.html')