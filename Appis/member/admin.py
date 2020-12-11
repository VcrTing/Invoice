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
    readonly_fields = ['area', ]
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

@admin.register(models.Member)
class MemberAdmin(admin.ModelAdmin):

    list_display = ['num', 'named', 'addr', 'status', 'add_time']
    
    search_fields = ['named', ]
    list_filter = ['status', ]
    readonly_fields = ['add_time', ]
    # exclude = ['id']
    fieldsets = (
        ("资料", {
            "fields": (
                'num', 'named', 'addr'
            ),
        }),
        ("联络信息", {
            "fields": (
                'area', 'phoned', 'email'
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