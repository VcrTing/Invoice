from rest_framework import serializers
from . import models

# Serializer
class TagSerializer(serializers.ModelSerializer):
    """
        清单
    """
    class Meta:
        model = models.Tag
        depth = 3
        fields = '__all__'

class FreightSerializer(serializers.ModelSerializer):
    """
        清单
    """
    tag_id = serializers.IntegerField(required = False)

    class Meta:
        model = models.Freight
        depth = 3
        fields = ['id', 'num', 'named', 'unit', 'tag', 'tag_id', 'price']
        
"""
class FreightEveryMemberSerializer(serializers.ModelSerializer):
    ""
        清单
    ""
    class Meta:
        model = models.FreightEveryMember
        depth = 3
        fields = '__all__'
"""