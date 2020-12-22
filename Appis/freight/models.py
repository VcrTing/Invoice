from django.db import models
from django.utils import timezone

from Appis.member import models as member_models
# Create your models here.

class Tag(models.Model):
    named = models.CharField(max_length=20, null=True, blank=True, unique=True, verbose_name='标签名称')
    color = models.CharField(max_length=20, default='#CCD6D5', null=True, blank=True, unique=True, verbose_name='标签颜色')

    add_time = models.DateTimeField(verbose_name='创建时间', default=timezone.now)

    class Meta:
        verbose_name = "标签"
        verbose_name_plural = verbose_name

    def __str__(self):
        if self.named:
            return self.named
        else:
            return '-空白-'

class Freight(models.Model):
    # 菜品
    num = models.CharField(max_length=80, null=True, blank=True, verbose_name='菜品编号')
    named = models.CharField(max_length=80, null=True, blank=True, verbose_name='菜品名称')
    unit = models.SmallIntegerField(choices=(
        (0, '斤'),
        (1, '包'),
        (2, '件'),
        (3, '扎'),
        (4, '两'),
        (5, '磅'),
        (6, '条'),
    ), default=1, verbose_name='单位', null=True)
    tag = models.ManyToManyField(to = Tag, related_name='tag', blank=True, verbose_name='标签')
    price = models.CharField(max_length=90, verbose_name='默认单价', default='0.00')

    status = models.BooleanField(verbose_name='数据状态', default = True)
    add_time = models.DateTimeField(verbose_name='創建時間', default=timezone.now)
    
    class Meta:
        verbose_name = "菜品"
        verbose_name_plural = verbose_name

    def __str__(self):
        return '菜品: ' + self.named

"""
class FreightEveryMember(models.Model):
    # 每个客人对应的菜品单价
    freight = models.ForeignKey(Freight, verbose_name='所属菜品', on_delete=models.CASCADE, null=True)
    member = models.ForeignKey(Member, verbose_name='所属客人', on_delete=models.CASCADE, null=True)
    discount = models.CharField(max_length=90, null=True, blank=True, verbose_name='折扣价格')
    price = models.CharField(max_length=90, verbose_name='对应单价')

    status = models.BooleanField(verbose_name='数据状态', default = True)
    add_time = models.DateTimeField(verbose_name='創建時間', default=timezone.now)
    
    class Meta:
        verbose_name = "客人菜品对应单价"
        verbose_name_plural = verbose_name

    def __str__(self):
        return '客人菜品对应单价'
"""