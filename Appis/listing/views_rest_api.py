from rest_framework import filters, pagination
from rest_framework import mixins, viewsets, views, status, generics
from rest_framework.response import Response
from django_filters.rest_framework.backends import DjangoFilterBackend

from . import models
from . import serializers

# REST
class ListingViewSet(viewsets.ModelViewSet, generics.ListAPIView):
    """
        清单
    """
    queryset = models.Listing.objects.all()
    serializer_class = serializers.ListingSerializer
    filter_backends = (DjangoFilterBackend, filters.OrderingFilter)
    filter_fields = ('status', )
    ordering_fields = ('add_time', )
    pagination_class = pagination.LimitOffsetPagination