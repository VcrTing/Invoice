from rest_framework import serializers
from . import models
from Appis.freight.models import Tag

# Serializer
class AreaSerializer(serializers.ModelSerializer):
    """
        电话前缀
    """
    class Meta:
        model = models.Area
        depth = 3
        fields = '__all__'

class MemberySerializer(serializers.ModelSerializer):
    """
        客人
    """
    tag_id = serializers.IntegerField(required = False)
    area_id = serializers.IntegerField(required = False)

    class Meta:
        model = models.Membery
        depth = 3
        fields = ['id', 'num', 'named', 'tag', 'tag_id', 'contact_named', 'area', 'area_id', 'phoned', 'email', 'addr', 'status', 'add_time']

    def create(self, validated_data):
        tag_id = validated_data.pop('tag_id')
        area_id = validated_data.pop('area_id')
        instance = super().create(validated_data)
        
        instance.tag = Tag.objects.get(id = tag_id)
        instance.area = models.Area.objects.get(id = area_id)
        instance.save()
        
        return instance

class PriceCollectSerializer(serializers.ModelSerializer):
    """
        报价单
    """
    membery_id = serializers.IntegerField(required = False)

    class Meta:
        model = models.PriceCollect
        depth = 3
        fields = [ 'id', 'num', 'start_time', 'end_time', 'freight_num', 'draft_status', 'over_status', 'first_pdf', 'membery', 'membery_id', 'status', 'add_time']

    def create(self, validated_data):
        membery_id = validated_data.pop('membery_id')
        instance = super().create(validated_data)
        
        instance.membery = models.Membery.objects.get(id = membery_id)
        instance.save()
        
        return instance


class PriceCollectContentSerializer(serializers.ModelSerializer):
    """
        报价单 内容
    """
    price_collect_id = serializers.IntegerField(required = False)

    class Meta:
        model = models.PriceCollectContent
        depth = 3
        fields = [ 'id', 'price_collect_id', 'content' ]

    def create(self, validated_data):
        price_collect_id = validated_data.pop('price_collect_id')
        instance = super().create(validated_data)
        
        instance.price_collect = models.PriceCollect.objects.get(id = price_collect_id)
        instance.save()
        
        return instance
    