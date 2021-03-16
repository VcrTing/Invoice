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
from django.views.generic import TemplateView

from rest_framework import routers
from rest_framework.documentation import include_docs_urls

from . import settings

# VIEWS REST API
from Appis.user import views_rest_api as userREST
from Appis.member import views_rest_api as memberREST
from Appis.freight import views_rest_api as freightREST
from Appis.listing import views_rest_api as listingREST

router = routers.DefaultRouter()

router.register('user', userREST.UserProfileViewSet)

router.register('tag', freightREST.TagViewSet)
router.register('area', memberREST.AreaViewSet)

router.register('member', memberREST.MemberyViewSet)
router.register('price_collect', memberREST.PriceCollectViewSet)
router.register('price_collect_content', memberREST.PriceCollectContentViewSet)

router.register('freight', freightREST.FreightViewSet)
# router.register('freight_every_member', freightREST.FreightEveryMemberViewSet)
router.register('listing', listingREST.ListingViewSet)
router.register('listing_content', listingREST.ListingContentViewSet)

# VIEWS
from Appis.web import views as web
from Appis.user import views as user
from Appis.member import views as member
from Appis.freight import views as freight
from Appis.listing import views as listing

urlpatterns = [
    path('into/', user.UserView.as_view()),
    path('tool/import/', web.ImportView.as_view()),
    path('pdf/print/', web.PdfView.as_view()),
    path('pdf/test/', web.TestView.as_view()),
    
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    re_path(r'^media/(?P<path>.*)$',  serve, {'document_root': settings.MEDIA_ROOT}),
    re_path(r'^static/(?P<path>.*)$', serve, {'document_root': settings.STATIC_URL}),

    path('', web.WebView.as_view()),
    # re_path(r'^home/(?P<path>.*)$',  web.WebView.as_view()),
    # re_path(r'^/(?P<path>.*)$',  TemplateView.as_view(template_name="index.html")),

]

# handler404 = 'Appis.web.views.handler_404'

# ETRA
TEST = True

if TEST:
    urlpatterns += [
        path('docs/', include_docs_urls(title='菜品清单管理系统')),
        path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    ]