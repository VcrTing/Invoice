from django.contrib import admin

from . import models
from invoice.settings import ADMIN_CONF
# Register your models here.

admin.site.site_title = ADMIN_CONF['admin_title']
admin.site.site_header = ADMIN_CONF['admin_header']

@admin.register(models.Listing)
class ListingAdmin(admin.ModelAdmin):

    list_display = ['num', 'listing_time', 'pay_way', 'member', 'result_price', 'status']
    
    search_fields = ['member', 'num']
    list_filter = ['status', ]
    readonly_fields = ['add_time']
    # exclude = ['id']
    fieldsets = (
        ("资料", {
            "fields": (
                'num', 'num_reference', 'listing_time', 'pay_way', 'member'
            ),
        }),
        ("价格", {
            "fields": (
                'total_price_freight', 'total_discount', 'total_add', 'result_price'
            ),
        }),
        ("收货负责人", {
            "fields": (
                'pay_contact_named', 'pay_contact_phone', 'pay_contact_email', 'pay_contact_fax'
            ),
        }),
        ("内容", {
            "fields": (
                'title', 'content'
            ),
        }),
        ("其他", {
            "fields": (
                'mark', 'status', 'add_time'
            ),
        })
    )
    list_per_page = 50
    empty_value_display = '--'

    def get_ordering(self, request):
        return ['-add_time', ]