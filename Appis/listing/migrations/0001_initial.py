# Generated by Django 2.2.5 on 2020-11-30 13:39

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('member', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Listing',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('num', models.CharField(blank=True, max_length=80, null=True, verbose_name='发票编号')),
                ('num_reference', models.CharField(blank=True, max_length=80, null=True, verbose_name='参考编号')),
                ('listing_time', models.DateTimeField(default=django.utils.timezone.now, verbose_name='发票時間')),
                ('pay_way', models.SmallIntegerField(choices=[(0, '线下支付'), (1, '线上支付')], default=1, null=True, verbose_name='付款方式')),
                ('pay_contact_named', models.CharField(blank=True, max_length=80, null=True, verbose_name='销售员名称')),
                ('pay_contact_phone', models.CharField(blank=True, max_length=80, null=True, verbose_name='销售员电话号码')),
                ('pay_contact_email', models.CharField(blank=True, max_length=80, null=True, verbose_name='销售员电邮')),
                ('pay_contact_fax', models.CharField(blank=True, max_length=80, null=True, verbose_name='销售员传真')),
                ('title', models.TextField(blank=True, default='--', max_length=1200, null=True, verbose_name='清单标题')),
                ('content', models.TextField(blank=True, default='--', max_length=7200, null=True, verbose_name='清单内容')),
                ('total_price_freight', models.CharField(blank=True, max_length=80, null=True, verbose_name='菜品总价')),
                ('total_discount', models.CharField(blank=True, max_length=80, null=True, verbose_name='总折扣')),
                ('total_add', models.CharField(blank=True, max_length=80, null=True, verbose_name='附加费')),
                ('result_price', models.CharField(blank=True, max_length=80, null=True, verbose_name='最终价格')),
                ('mark', models.CharField(blank=True, max_length=180, null=True, verbose_name='备注')),
                ('status', models.BooleanField(default=True, verbose_name='数据状态')),
                ('add_time', models.DateTimeField(default=django.utils.timezone.now, verbose_name='創建時間')),
                ('member', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='member.Member', verbose_name='所属客人')),
            ],
            options={
                'verbose_name': '清单',
                'verbose_name_plural': '清单',
            },
        ),
    ]
