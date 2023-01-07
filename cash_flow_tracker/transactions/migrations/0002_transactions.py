# Generated by Django 4.1.5 on 2023-01-05 19:31

from django.db import migrations

def create_data(apps, schema_editor):
    Transaction = apps.get_model('transactions', 'Transaction')
    Transaction(details="Casino", amount=12.23, isIncome=True)

class Migration(migrations.Migration):

    dependencies = [
        ('transactions', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_data)
    ]