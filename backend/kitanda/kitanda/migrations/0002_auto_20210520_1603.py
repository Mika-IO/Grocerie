# Generated by Django 3.2.3 on 2021-05-20 19:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kitanda', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='client',
            name='products',
        ),
        migrations.AlterField(
            model_name='client',
            name='payment_method',
            field=models.CharField(max_length=250, verbose_name='meio de pagamento'),
        ),
    ]
