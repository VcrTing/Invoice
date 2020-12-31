from django.contrib import admin

from . import models
from invoice.settings import ADMIN_CONF
# Register your models here.

admin.site.site_title = ADMIN_CONF['admin_title']
admin.site.site_header = ADMIN_CONF['admin_header']


@admin.register(models.Tag)
class TagAdmin(admin.ModelAdmin):
    list_display = ['named', 'color', 'add_time']
    search_fields = ['named']
    readonly_fields = ['add_time']
    exclude = ['id']
    fieldsets = (
        ("标签信息", {
            "fields": (
                'named', 'color'
            ),
        }),
        ("其他", {
            "fields": (
                'add_time', 
            ),
        }),
    )
    list_per_page = 50
    empty_value_display = '--'

    def get_ordering(self, request):
        return ['-add_time', ]

@admin.register(models.Freight)
class FreightAdmin(admin.ModelAdmin):

    list_display = ['num', 'named', 'unit', 'status', 'add_time']
    
    search_fields = ['named', 'unit']
    list_filter = ['status', ]
    readonly_fields = ['add_time']
    # exclude = ['id']
    fieldsets = (
        ("资料", {
            "fields": (
                'num', 'named'
            ),
        }),
        ("属性", {
            "fields": (
                'unit', 'tag', 'price'
            ),
        }),
        ("其他", {
            "fields": (
                'status', 'add_time'
            ),
        })
    )
    list_per_page = 400
    empty_value_display = '--'

    def get_ordering(self, request):
        return ['-add_time', ]
    
"""
@admin.register(models.FreightEveryMember)
class FreightEveryMemberAdmin(admin.ModelAdmin):

    list_display = ['freight', 'member', 'discount', 'price', 'status', 'add_time']
    
    search_fields = ['named', 'price']
    list_filter = ['status', ]
    readonly_fields = ['add_time']
    # exclude = ['id']
    fieldsets = (
        ("关联对象", {
            "fields": (
                'freight', 'member'
            ),
        }),
        ("价格相关", {
            "fields": (
                'discount', 'price'
            ),
        }),
        ("其他", {
            "fields": (
                'status', 'add_time'
            ),
        })
    )
    list_per_page = 50
    empty_value_display = '--'

    def get_ordering(self, request):
        return ['-add_time', ]
"""