from django.contrib import admin

from . import models
from invoice.settings import ADMIN_CONF
# Register your models here.

admin.site.site_title = ADMIN_CONF['admin_title']
admin.site.site_header = ADMIN_CONF['admin_header']

@admin.register(models.Area)
class AreaAdmin(admin.ModelAdmin):

    list_display = ['area', ]
    
    search_fields = ['area', ]
    list_filter = ['area', ]
    # readonly_fields = ['area', ]
    # exclude = ['id']
    fieldsets = (
        ("资料", {
            "fields": (
                'area', 
            ),
        }),
    )
    list_per_page = 50
    empty_value_display = '--'

@admin.register(models.Membery)
class MemberyAdmin(admin.ModelAdmin):

    list_display = ['num', 'named', 'addr', 'status', 'add_time']
    
    search_fields = ['named', ]
    list_filter = ['status', ]
    readonly_fields = ['add_time', ]
    # exclude = ['id']
    fieldsets = (
        ("资料", {
            "fields": (
                'num', 'named', 'addr', 'tag'
            ),
        }),
        ("联络信息", {
            "fields": (
                'contact_named', 'area', 'phoned', 'email'
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
    

@admin.register(models.PriceCollect)
class PriceCollectAdmin(admin.ModelAdmin):

    list_display = ['num', 'start_time', 'draft_status', 'over_status', 'first_pdf', 'membery', 'status', 'add_time']
    
    search_fields = ['num', 'membery']
    list_filter = ['status', ]
    readonly_fields = ['add_time', ]
    # exclude = ['id']
    fieldsets = (
        ("资料", {
            "fields": (
                'num', 'membery', 'freight_num'
            ),
        }),
        ("状态", {
            "fields": (
                'draft_status', 'over_status', 'first_pdf'
            ),
        }),
        ("属性", {
            "fields": (
                'start_time', 'end_time'
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

@admin.register(models.PriceCollectContent)
class PriceCollectContentAdmin(admin.ModelAdmin):

    list_display = ['price_collect', ]
    
    search_fields = ['price_collect', ]
    list_filter = ['price_collect', ]
    
    fieldsets = (
        ("资料", {
            "fields": (
                'price_collect', 'content'
            ),
        }),
    )
    list_per_page = 50
    empty_value_display = '--'