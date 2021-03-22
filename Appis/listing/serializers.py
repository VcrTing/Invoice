from rest_framework import serializers
from . import models

from Appis.member.models import Membery, PriceCollect, PayTime

# Serializer
class ListingSerializer(serializers.ModelSerializer):
    """
        清单
    """
    membery_id = serializers.IntegerField(required = False)
    pay_time_id = serializers.IntegerField(required = False)
    price_collect_id = serializers.IntegerField(required = False)

    class Meta:
        model = models.Listing
        depth = 3
        fields = [
            'id', 'num', 'listing_time', 'pay_way', 'pay_time', 'pay_time_id', 
            'membery', 'membery_id',
            'price_collect', 'price_collect_id',
            'freight_item_num', 'result_price', 'total_price_freight',
            'mark',
            'pay_contact_named', 'pay_contact_area', 'pay_contact_phone', 'pay_contact_email',
            'status', 'add_time'
        ]

    def create(self, validated_data):
        membery_id = validated_data.pop('membery_id')
        pay_time_id = validated_data.pop('pay_time_id')
        price_collect_id = validated_data.pop('price_collect_id')
        instance = super().create(validated_data)
        
        instance.membery = Membery.objects.get(id = membery_id)
        instance.pay_time = PayTime.objects.get(id = pay_time_id)
        instance.price_collect = PriceCollect.objects.get(id = price_collect_id)
        instance.save()
        
        return instance

class ListingContentSerializer(serializers.ModelSerializer):
    """
        发票 内容
    """
    listing_id = serializers.IntegerField(required = False)

    class Meta:
        model = models.ListingContent
        depth = 3
        fields = [ 'id', 'listing_id', 'listing', 'content' ]

    def create(self, validated_data):
        listing_id = validated_data.pop('listing_id')
        instance = super().create(validated_data)
        
        instance.listing = models.Listing.objects.get(id = listing_id)
        instance.save()
        
        return instance


class ListingNoSerializer(serializers.ModelSerializer):
    """
        发票自定义编号
    """
    class Meta:
        model = models.ListingNo
        depth = 3
        fields = '__all__'