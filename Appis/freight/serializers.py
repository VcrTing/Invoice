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
    tags = serializers.CharField(required = False)

    class Meta:
        model = models.Freight
        depth = 3
        fields = ['id', 'num', 'named', 'unit', 'tags', 'tag', 'tag_id', 'price', 'is_n', 'status']
        
    def create(self, validated_data):
        tags = validated_data.pop('tags')
        
        tags = [int(i) for i in str(tags).split(',')]
        instance = super().create(validated_data)
        instance.tag.clear()
        for t in tags:
            instance.tag.add(t)

        instance.save()
        
        return instance

    def update(self, instance, validated_data):
        try:
            tags = validated_data.pop('tags')
            tags = [int(i) for i in str(tags).split(',')]

            super().update(instance, validated_data)

            instance.tag.clear()
            for t in tags:
                instance.tag.add(t)

            instance.save()
        except:
            super().update(instance, validated_data)

        return instance
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