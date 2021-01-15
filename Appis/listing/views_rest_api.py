from rest_framework import filters, pagination
from rest_framework import mixins, viewsets, views, status, generics
from rest_framework.response import Response
from django.db.models import Q
from django_filters.rest_framework.backends import DjangoFilterBackend

from . import models
from Appis.member.models import PriceCollect, Membery
from . import serializers

# REST
class ListingViewSet(viewsets.ModelViewSet, generics.ListAPIView):
    """
        清单
    """
    queryset = models.Listing.objects.all()
    serializer_class = serializers.ListingSerializer
    filter_backends = (DjangoFilterBackend, filters.OrderingFilter)
    filter_fields = ('status', 'membery', 'listing_time', 'num', 'pay_way')
    ordering_fields = ('add_time', )
    pagination_class = pagination.LimitOffsetPagination

    def get_queryset(self):
        status = self.request.query_params.get('status', None)

        res = models.Listing.objects.filter(
            Q(status = True) )

        search_f = self.request.query_params.get('search_f', None)

        if search_f is not None:
            num = self.request.query_params.get('num', None)

            end_timed = self.request.query_params.get('end_timed', None)
            start_timed = self.request.query_params.get('start_timed', None)

            price_num = self.request.query_params.get('price_num', None)
            membery_num = self.request.query_params.get('membery_num', None)
            membery_named = self.request.query_params.get('membery_named', None)

            if num:
                res = res.filter( Q(num__icontains = num) )
            if price_num:
                pcs = PriceCollect.objects.filter(num__icontains = price_num)
                res = res.filter(price_collect__in = pcs)
            if membery_num:
                ms = Membery.objects.filter(num__icontains = membery_num)
                res = res.filter(membery__in = ms)
            if membery_named:
                ms = Membery.objects.filter(named__icontains = membery_named)
                res = res.filter(membery__in = ms)
            
            if (start_timed is not None) and (end_timed is not None):
                if (start_timed is not '') and (end_timed is not ''):
                    res = res.filter( Q(listing_time__range = (start_timed, end_timed)) )

        return res

class ListingContentViewSet(viewsets.ModelViewSet, generics.ListAPIView):
    """
        报价单内容
    """
    queryset = models.ListingContent.objects.all()
    serializer_class = serializers.ListingContentSerializer
    filter_backends = (DjangoFilterBackend, filters.OrderingFilter)
    filter_fields = ('listing', )
    pagination_class = pagination.LimitOffsetPagination