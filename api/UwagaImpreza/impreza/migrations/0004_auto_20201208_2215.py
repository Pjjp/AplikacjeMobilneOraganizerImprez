# Generated by Django 3.1.4 on 2020-12-08 22:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('impreza', '0003_auto_20201208_2144'),
    ]

    operations = [
        migrations.RenameField(
            model_name='guest',
            old_name='guest_location',
            new_name='location',
        ),
        migrations.RemoveField(
            model_name='host',
            name='host_location',
        ),
    ]
