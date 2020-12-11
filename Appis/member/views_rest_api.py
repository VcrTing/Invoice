from rest_framework import filters, pagination
from rest_framework import mixins, viewsets, views, status, generics
from rest_framework.response import Response
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

class MemberViewSet(viewsets.ModelViewSet, generics.ListAPIView):
    """
        邮件模版
    """
    queryset = models.Member.objects.all()
    serializer_class = serializers.MemberSerializer
    filter_backends = (DjangoFilterBackend, filters.OrderingFilter)
    filter_fields = ('status', )
    ordering_fields = ('add_time', )
    pagination_class = pagination.LimitOffsetPagination