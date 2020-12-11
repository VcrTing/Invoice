from django.db import models
from django.utils import timezone

# Create your models here.

class Area(models.Model):
    area = models.CharField(max_length=30, null=True, verbose_name='手机号码前缀')

    class Meta:
        verbose_name = "地域与电话号码前缀"
        verbose_name_plural = verbose_name

    def __str__(self):
        return '地域：' + str(self.area)


class Member(models.Model):
    # 客人
    num = models.CharField(max_length=80, null=True, blank=True, verbose_name='客户编号')
    named = models.CharField(max_length=80, null=True, blank=True, verbose_name='公司名称')

    area = models.ForeignKey(Area, on_delete=models.CASCADE, null=True, verbose_name='手机号码前缀')
    phoned = models.CharField(max_length=60, null=True, blank=True, verbose_name='电话')
    email = models.CharField(max_length=200, null=True, blank=True, verbose_name='邮箱地址')

    addr = models.CharField(max_length=150, null=True, blank=True, verbose_name='送货地址')

    status = models.BooleanField(verbose_name='数据状态', default = True)
    add_time = models.DateTimeField(verbose_name='創建時間', default=timezone.now)
    
    class Meta:
        verbose_name = "客人"
        verbose_name_plural = verbose_name

    def __str__(self):
        return "客人: " + str(self.named)