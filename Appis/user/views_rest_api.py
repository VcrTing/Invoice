from rest_framework import filters, pagination
from rest_framework import mixins, viewsets, views, status, generics
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from django_filters.rest_framework.backends import DjangoFilterBackend

from . import models
from . import serializers

# REST
class UserProfileViewSet(viewsets.ModelViewSet, generics.ListAPIView):
    """
        用户
    """
    queryset = models.UserProfile.objects.all()
    serializer_class = serializers.UserProfileSerializer
    filter_backends = (DjangoFilterBackend, filters.OrderingFilter)
    pagination_class = pagination.LimitOffsetPagination