from rest_framework import filters, pagination
from rest_framework import mixins, viewsets, views, status, generics
from rest_framework.response import Response
from django_filters.rest_framework.backends import DjangoFilterBackend

from . import models
from Appis.member.models import PriceCollect
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
        res = models.Listing.objects.all()

        pc_num = self.request.query_params.get('price_collect_num', None)
        if pc_num:
            pc = PriceCollect.objects.filter(num__icontains = pc_num)
            pc = [p.id for p in pc]
            res = res.filter(price_collect__in = pc)

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