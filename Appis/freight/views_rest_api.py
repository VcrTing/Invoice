from rest_framework import filters, pagination
from rest_framework import mixins, viewsets, views, status, generics
from rest_framework.response import Response
from django_filters.rest_framework.backends import DjangoFilterBackend

from . import models
from . import serializers

# REST
class TagViewSet(viewsets.ModelViewSet, generics.ListAPIView):
    """
        标签
    """
    queryset = models.Tag.objects.all()
    serializer_class = serializers.TagSerializer
    filter_backends = (DjangoFilterBackend, filters.OrderingFilter)
    filter_fields = ('status', )
    ordering_fields = ('add_time', )
    pagination_class = pagination.LimitOffsetPagination

class FreightViewSet(viewsets.ModelViewSet, generics.ListAPIView):
    """
        菜品
    """
    queryset = models.Freight.objects.all()
    serializer_class = serializers.FreightSerializer
    filter_backends = (DjangoFilterBackend, filters.OrderingFilter)
    filter_fields = ('status', )
    ordering_fields = ('add_time', )
    pagination_class = pagination.LimitOffsetPagination

"""
class FreightEveryMemberViewSet(viewsets.ModelViewSet, generics.ListAPIView):
    ""
        客人对应菜品单价
    ""
    queryset = models.FreightEveryMember.objects.all()
    serializer_class = serializers.FreightEveryMemberSerializer
    filter_backends = (DjangoFilterBackend, filters.OrderingFilter)
    filter_fields = ('status', )
    ordering_fields = ('add_time', )
    pagination_class = pagination.LimitOffsetPagination
"""