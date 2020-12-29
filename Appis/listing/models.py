from django.db import models
from django.utils import timezone

from Appis.member import models as member_models
# Create your models here.

class Listing(models.Model):
    # 发票
    num = models.CharField(max_length=80, null=True, blank=True, default='001', verbose_name='发票编号')
    num_reference = models.CharField(max_length=80, null=True, blank=True, verbose_name='参考编号')

    listing_time = models.DateTimeField(verbose_name='报价日期', default=timezone.now)

    pay_way = models.SmallIntegerField(choices=(
        (0, '支票'),
        (1, '现金')
    ), default=1, verbose_name='付款方式', null=True)

    pay_contact_named = models.CharField(max_length=80, null=True, blank=True, verbose_name='销售员名称')
    pay_contact_phone = models.CharField(max_length=80, null=True, blank=True, verbose_name='销售员电话号码')
    pay_contact_email = models.CharField(max_length=80, null=True, blank=True, verbose_name='销售员电邮')
    pay_contact_fax = models.CharField(max_length=80, null=True, blank=True, verbose_name='销售员传真')

    membery = models.ForeignKey(member_models.Membery, verbose_name='所属客人', on_delete=models.CASCADE, null=True)
    price_collect = models.ForeignKey(member_models.PriceCollect, verbose_name='所属报价单', on_delete=models.CASCADE, null=True)
    freight_item_num = models.SmallIntegerField(default=0, verbose_name='购菜项数', null=True)

    total_price_freight = models.CharField(max_length=80, null=True, blank=True, verbose_name='菜品总价')
    total_discount = models.CharField(max_length=80, null=True, blank=True, verbose_name='总折扣')
    total_add = models.CharField(max_length=80, null=True, blank=True, verbose_name='附加费')

    result_price = models.CharField(max_length=80, null=True, blank=True, verbose_name='最终价格')  
    mark = models.CharField(max_length=180, null=True, blank=True, verbose_name='备注')

    draft_status = models.BooleanField(verbose_name='是否是草稿', default = False)
    merge_status = models.BooleanField(verbose_name='是否合并过', default = False)
    pay_status = models.BooleanField(verbose_name='是否支付过', default = False)
    pdf_status = models.BooleanField(verbose_name='是否导出过', default = False)

    status = models.BooleanField(verbose_name='数据状态', default = True)
    add_time = models.DateTimeField(verbose_name='創建時間', default=timezone.now)

    class Meta:
        verbose_name = "发票"
        verbose_name_plural = verbose_name

    def __str__(self):
        return '发票 num: ' + self.num

class ListingContent(models.Model):

    content = models.TextField(max_length=7200, default='--', null=True, blank=True, verbose_name='发票内容')

    listing = models.ForeignKey(Listing, verbose_name='所属发票', on_delete=models.CASCADE, null=True)

    status = models.BooleanField(verbose_name='数据状态', default = True)
    add_time = models.DateTimeField(verbose_name='創建時間', default=timezone.now)

    class Meta:
        verbose_name = "发票内容"
        verbose_name_plural = verbose_name

    def __str__(self):
        return '发票内容: ' + str(self.listing)
