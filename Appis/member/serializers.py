from rest_framework import serializers
from . import models

# Serializer
class AreaSerializer(serializers.ModelSerializer):
    """
        电话前缀
    """
    class Meta:
        model = models.Area
        depth = 3
        fields = '__all__'

class MemberSerializer(serializers.ModelSerializer):
    """
        客人
    """
    class Meta:
        model = models.Member
        depth = 3
        fields = '__all__'
