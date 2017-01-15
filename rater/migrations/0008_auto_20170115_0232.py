# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-01-15 02:32
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rater', '0007_auto_20170115_0226'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='liked',
            field=models.ManyToManyField(blank=True, related_name='liked_me', to=settings.AUTH_USER_MODEL),
        ),
    ]
