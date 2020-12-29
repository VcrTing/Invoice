from rest_framework import serializers
from . import models

# Serializer
class UserProfileSerializer(serializers.ModelSerializer):
    """
        用户
    """
    class Meta:
        model = models.UserProfile
        depth = 3
        fields = '__all__'