from rest_framework import filters, pagination
from rest_framework import mixins, viewsets, views, status, generics
from rest_framework.response import Response

from rest_framework.permissions import AllowAny

from django_filters.rest_framework.backends import DjangoFilterBackend

from . import models
from . import serializers

# REST
class AreaViewSet(viewsets.ModelViewSet, generics.ListAPIView):
    """
        电话前缀
    """
    queryset = models.Area.objects.all()
    serializer_class = serializers.AreaSerializer
    filter_backends = (DjangoFilterBackend, filters.OrderingFilter)
    pagination_class = pagination.LimitOffsetPagination

class MemberyViewSet(viewsets.ModelViewSet, generics.ListAPIView):
    """
        邮件模版
    """
    permission_classes = (AllowAny, )
    queryset = models.Membery.objects.all()
    serializer_class = serializers.MemberySerializer
    filter_backends = (DjangoFilterBackend, filters.OrderingFilter)
    filter_fields = ('status', )
    ordering_fields = ('add_time', )
    pagination_class = pagination.LimitOffsetPagination
    
class PriceCollectViewSet(viewsets.ModelViewSet, generics.ListAPIView):
    """
        报价单
    """
    queryset = models.PriceCollect.objects.all()
    serializer_class = serializers.PriceCollectSerializer
    filter_backends = (DjangoFilterBackend, filters.OrderingFilter)
    filter_fields = ('status', )
    ordering_fields = ('add_time', )
    pagination_class = pagination.LimitOffsetPagination

class PriceCollectContentViewSet(viewsets.ModelViewSet, generics.ListAPIView):
    """
        报价单内容
    """
    queryset = models.PriceCollectContent.objects.all()
    serializer_class = serializers.PriceCollectContentSerializer
    filter_backends = (DjangoFilterBackend, filters.OrderingFilter)
    pagination_class = pagination.LimitOffsetPagination