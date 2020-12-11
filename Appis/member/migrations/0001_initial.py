# Generated by Django 2.2.5 on 2020-11-30 13:39

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Member',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('num', models.CharField(blank=True, max_length=80, null=True, verbose_name='客户编号')),
                ('named', models.CharField(blank=True, max_length=80, null=True, verbose_name='公司名称')),
                ('addr', models.CharField(blank=True, max_length=150, null=True, verbose_name='送货地址')),
                ('status', models.BooleanField(default=True, verbose_name='数据状态')),
                ('add_time', models.DateTimeField(default=django.utils.timezone.now, verbose_name='創建時間')),
            ],
            options={
                'verbose_name': '客人',
                'verbose_name_plural': '客人',
            },
        ),
    ]
