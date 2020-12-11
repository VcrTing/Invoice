from rest_framework import serializers
from . import models

# Serializer
class ListingSerializer(serializers.ModelSerializer):
    """
        清单
    """
    class Meta:
        model = models.Listing
        depth = 3
        fields = '__all__'