from django.db import models
from django.utils import timezone

from ..member.models import Member
# Create your models here.

class Listing(models.Model):
    # 清单
    num = models.CharField(max_length=80, null=True, blank=True, verbose_name='发票编号')
    num_reference = models.CharField(max_length=80, null=True, blank=True, verbose_name='参考编号')

    listing_time = models.DateTimeField(verbose_name='发票時間', default=timezone.now)

    pay_way = models.SmallIntegerField(choices=(
        (0, '线下支付'),
        (1, '线上支付')
    ), default=1, verbose_name='付款方式', null=True)

    pay_contact_named = models.CharField(max_length=80, null=True, blank=True, verbose_name='销售员名称')
    pay_contact_phone = models.CharField(max_length=80, null=True, blank=True, verbose_name='销售员电话号码')
    pay_contact_email = models.CharField(max_length=80, null=True, blank=True, verbose_name='销售员电邮')
    pay_contact_fax = models.CharField(max_length=80, null=True, blank=True, verbose_name='销售员传真')

    # 标题
    title = models.TextField(max_length=1200, default='--', null=True, blank=True, verbose_name='清单标题')
    # 内容
    # [ [f.num, f.named, num, price, ] ]
    content = models.TextField(max_length=7200, default='--', null=True, blank=True, verbose_name='清单内容')

    member = models.ForeignKey(Member, verbose_name='所属客人', on_delete=models.CASCADE, null=True)

    total_price_freight = models.CharField(max_length=80, null=True, blank=True, verbose_name='菜品总价')
    total_discount = models.CharField(max_length=80, null=True, blank=True, verbose_name='总折扣')
    total_add = models.CharField(max_length=80, null=True, blank=True, verbose_name='附加费')

    result_price = models.CharField(max_length=80, null=True, blank=True, verbose_name='最终价格')  
    mark = models.CharField(max_length=180, null=True, blank=True, verbose_name='备注')

    status = models.BooleanField(verbose_name='数据状态', default = True)
    add_time = models.DateTimeField(verbose_name='創建時間', default=timezone.now)

    class Meta:
        verbose_name = "报价清单"
        verbose_name_plural = verbose_name

    def __str__(self):
        return '清单'