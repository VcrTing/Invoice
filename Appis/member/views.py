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
# Create your views here.

class MemberView(View):
    def get(self, request):
        pass