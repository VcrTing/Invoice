# Generated by Django 2.2.5 on 2020-12-14 08:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('freight', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='freight',
            name='unit',
            field=models.SmallIntegerField(choices=[(0, '斤'), (1, '包'), (2, '件'), (3, '扎'), (4, '两'), (5, '磅'), (6, '条')], default=1, null=True, verbose_name='单位'),
        ),
        migrations.AlterField(
            model_name='tag',
            name='color',
            field=models.CharField(blank=True, default='#CCD6D5', max_length=20, null=True, unique=True, verbose_name='标签颜色'),
        ),
    ]