# Generated by Django 4.0 on 2021-12-23 03:29

import core.tools
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_picture_uuid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='picture',
            name='image',
            field=models.ImageField(blank=True, default='pictures/default.png', null=True, upload_to=core.tools.upload_image_path),
        ),
    ]
