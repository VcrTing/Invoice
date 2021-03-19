from django.shortcuts import render, redirect
from django.views.generic.base import View
from django.db.models import Q
from django.forms.models import model_to_dict
from django.http import HttpResponsePermanentRedirect, HttpResponse, JsonResponse
from django.views.decorators.clickjacking import xframe_options_deny, xframe_options_exempt
from django.http import FileResponse
from django.contrib.auth.hashers import make_password, check_password

import io, os, json, uuid, time, datetime
from random import choice, sample
from PIL import Image
import invoice.settings as settings

from .models import UserProfile
# Create your views here.

class UserView(View):
    def get(self, request):
        option = request.GET.get('salt', None)
        email = request.GET.get('into_k', None)
        pwd = request.GET.get('into_v', None)
        print(request.GET, request.GET.get('into_v', None), request.GET.get('into_k', None))

        return JsonResponse({ 'status': False })

    def post(self, request):
        res = {
            'status': False,
            'msg': 'NO_USER'
        }
        option = request.POST.get('salt', None)
        email = request.POST.get('into_k', None)
        pwd = request.POST.get('into_v', None)

        data = None
        users = UserProfile.objects.all()
        
        for i in request.POST:
            data = eval(i)

        if option is None:
            option = data['salt']
            email = data['into_k']
            pwd = data['into_v']

        if option == 'DENGLU':
            for u in users:
                if u.email == email:
                    if check_password(pwd, u.password):
                        res['status'] = True
                        res['nick'] = u.username
                        
                        u.now_login = datetime.datetime.now()
                        u.save()
                        return JsonResponse(res)
                    res['msg'] = 'PWD_ERROR'
        return JsonResponse(res)

