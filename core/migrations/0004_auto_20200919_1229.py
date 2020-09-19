# Generated by Django 3.1 on 2020-09-19 12:29

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_auto_20200916_2238'),
    ]

    operations = [
        migrations.AddField(
            model_name='class',
            name='importance',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='class',
            name='tags',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=200), blank=True, null=True, size=None),
        ),
    ]
