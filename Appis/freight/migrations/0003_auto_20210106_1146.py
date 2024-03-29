# Generated by Django 2.2.5 on 2021-01-06 03:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('freight', '0002_auto_20201214_1617'),
    ]

    operations = [
        migrations.AddField(
            model_name='freight',
            name='is_n',
            field=models.BooleanField(default=False, verbose_name='输入框类型是否为整数'),
        ),
        migrations.AlterField(
            model_name='freight',
            name='unit',
            field=models.SmallIntegerField(choices=[(0, '斤'), (1, '包'), (2, '件'), (3, '扎'), (4, '兩'), (5, '磅'), (6, '條'), (7, '張'), (8, '盒'), (9, '箱'), (10, '隻'), (11, '排'), (12, '枝'), (13, '桶'), (14, '個'), (15, '次'), (16, '樽'), (17, '罐'), (18, '板'), (19, '串'), (100, '')], default=1, null=True, verbose_name='单位'),
        ),
    ]
