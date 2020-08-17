# Generated by Django 3.0.3 on 2020-08-16 07:16

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('gender', models.CharField(choices=[('male', 'male'), ('female', 'female')], max_length=200)),
                ('academic', models.CharField(choices=[('higher', 'higher'), ('average', 'average'), ('lower', 'lower')], max_length=200)),
                ('observed', models.CharField(choices=[('high', 'high'), ('low', 'low')], max_length=200)),
                ('assess', models.CharField(max_length=10)),
            ],
        ),
    ]
