"""invoice URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from django.conf.urls import static
from django.views.static import serve

from rest_framework import routers
from rest_framework.documentation import include_docs_urls

from . import settings

# VIEWS REST API
from Appis.member import views_rest_api as memberREST
from Appis.freight import views_rest_api as freightREST
from Appis.listing import views_rest_api as listingREST

router = routers.DefaultRouter()

router.register('tag', freightREST.TagViewSet)
router.register('area', memberREST.AreaViewSet)
router.register('member', memberREST.MemberViewSet)
router.register('freight', freightREST.FreightViewSet)
# router.register('freight_every_member', freightREST.FreightEveryMemberViewSet)
router.register('listing', listingREST.ListingViewSet)

# VIEWS
from Appis.web import views as web
from Appis.member import views as member
from Appis.freight import views as freight
from Appis.listing import views as listing

urlpatterns = [
    path('', web.WebView.as_view()),
    path('member/', member.MemberView.as_view()),
    path('listing/', listing.ListingView.as_view()),
    path('freight_every_member/', freight.FreightEveryMemberView.as_view()),
    path('admin/', admin.site.urls),
    
    path('api/', include(router.urls)),
    re_path(r'^media/(?P<path>.*)$',  serve, {'document_root': settings.MEDIA_ROOT}),
    re_path(r'^static/(?P<path>.*)$', serve, {'document_root': settings.STATIC_URL}),

]

# ETRA
TEST = True

if TEST:
    urlpatterns += [
        path('docs/', include_docs_urls(title='菜品清单管理系统')),
        path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    ]