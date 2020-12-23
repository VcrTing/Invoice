# Generated by Django 2.2.5 on 2020-12-23 08:33

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('member', '0003_auto_20201218_1920'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pricecollect',
            name='end_time',
            field=models.DateField(default=django.utils.timezone.now, verbose_name='结束时间'),
        ),
        migrations.AlterField(
            model_name='pricecollect',
            name='start_time',
            field=models.DateField(default=django.utils.timezone.now, verbose_name='起始时间'),
        ),
    ]
