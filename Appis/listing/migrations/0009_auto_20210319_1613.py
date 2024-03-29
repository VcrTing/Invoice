# Generated by Django 2.2.5 on 2021-03-19 08:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('member', '0010_auto_20210319_1613'),
        ('listing', '0008_listingno_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='listing',
            name='pay_time',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='member.PayTime', verbose_name='付款日期'),
        ),
        migrations.AlterField(
            model_name='listing',
            name='pay_status',
            field=models.BooleanField(default=False, verbose_name='付款成功？'),
        ),
    ]
