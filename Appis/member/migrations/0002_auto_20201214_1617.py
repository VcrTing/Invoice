# Generated by Django 2.2.5 on 2020-12-14 08:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('member', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='pricecollect',
            name='content',
        ),
        migrations.AddField(
            model_name='pricecollect',
            name='freight_num',
            field=models.SmallIntegerField(default=0, verbose_name='菜品数量'),
        ),
        migrations.AlterField(
            model_name='pricecollect',
            name='first_pdf',
            field=models.BooleanField(default=False, verbose_name='是否导出过 Pdf'),
        ),
        migrations.AlterField(
            model_name='pricecollect',
            name='over_status',
            field=models.BooleanField(default=False, verbose_name='是否完结'),
        ),
        migrations.CreateModel(
            name='PriceCollectContent',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.TextField(blank=True, default='--', max_length=7200, null=True, verbose_name='清单内容')),
                ('price_collect', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='member.PriceCollect', verbose_name='所属报价单')),
            ],
            options={
                'verbose_name': '报价单',
                'verbose_name_plural': '报价单',
            },
        ),
    ]
