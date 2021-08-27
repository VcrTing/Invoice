from django.db import models
from django.utils import timezone

from Appis.freight import models as freight_models
from Appis import comp as comp
# Create your models here.

class PayTime(models.Model):
    named = models.CharField(max_length=30, null=True, verbose_name='期限名称')
    pay_time = models.SmallIntegerField(choices=comp.PAY_TIME, default=0, verbose_name='付款期限', null=True)

    status = models.BooleanField(verbose_name='数据状态', default = True)
    add_time = models.DateTimeField(verbose_name='創建時間', default=timezone.now)

    class Meta:
        verbose_name = "付款日期"
        verbose_name_plural = verbose_name

    def __str__(self):
        res = 0
        for i in comp.PAY_TIME:
            if i[0] == self.pay_time:
                res = i[1]
        return str(res)

class Area(models.Model):
    area = models.CharField(max_length=30, null=True, verbose_name='手机号码前缀')

    class Meta:
        verbose_name = "地域与电话号码前缀"
        verbose_name_plural = verbose_name

    def __str__(self):
        return '地域：' + str(self.area)

class Membery(models.Model):
    # 客人
    num = models.CharField(max_length=80, null=True, blank=True, verbose_name='客户编号')
    named = models.CharField(max_length=80, null=True, blank=True, verbose_name='公司名称')
    
    tag = models.ForeignKey(freight_models.Tag, on_delete=models.SET_NULL, null=True, blank=True, verbose_name='标签')
    
    pay_way = models.SmallIntegerField(choices=(
        (0, '支票'),
        (1, '现金')
    ), default=1, verbose_name='付款方式', null=True)
    pay_time = models.ForeignKey(PayTime, on_delete=models.CASCADE, null=True, blank=True, verbose_name='付款日期')

    contact_named = models.CharField(max_length=60, null=True, blank=True, verbose_name='联络人姓名', default='无')
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


class PriceCollect(models.Model):
    # 报价单
    num = models.CharField(max_length=80, null=True, blank=True, verbose_name='报价单号')
   
    start_time = models.DateTimeField(verbose_name='发票时间', null=True, blank=True, default=timezone.now)
    end_time = models.DateTimeField(verbose_name='备用时间', null=True, blank=True, default=timezone.now)

    freight_num = models.SmallIntegerField(verbose_name='菜品数量', default=0)

    draft_status = models.BooleanField(verbose_name='是否是草稿', default = True)
    over_status = models.BooleanField(verbose_name='完结付款？', default = False)
    first_pdf = models.BooleanField(verbose_name='是否导出过 Pdf', default = False)
    
    membery = models.ForeignKey(Membery, verbose_name='所属客人', on_delete=models.CASCADE, null=True)
    pay_way = models.SmallIntegerField(choices=(
        (0, '支票'),
        (1, '现金')
    ), default=1, verbose_name='付款方式', null=True)
    pay_time = models.ForeignKey(PayTime, on_delete=models.CASCADE, null=True, blank=True, verbose_name='付款日期')

    status = models.BooleanField(verbose_name='数据状态', default = True)
    add_time = models.DateTimeField(verbose_name='創建時間', default=timezone.now)
    
    class Meta:
        verbose_name = "报价单"
        verbose_name_plural = verbose_name

    def __str__(self):
        return '报价单: ' + self.num
        
class PriceCollectContent(models.Model): 
    # 报价内容
    content = models.TextField(max_length=52000, default='--', null=True, blank=True, verbose_name='清单内容')

    price_collect = models.ForeignKey(PriceCollect, verbose_name='所属报价单', on_delete=models.CASCADE, null=True)

    class Meta:
        verbose_name = "报价单内容"
        verbose_name_plural = verbose_name

    def __str__(self):
        return '报价单内容: ' + str(self.price_collect)
