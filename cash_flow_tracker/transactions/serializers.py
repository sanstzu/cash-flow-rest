from rest_framework import serializers
from .models import Transaction

class TransactionSerializer(serializers.ModelSerializer):

    class Meta:
            model = Transaction
            fields = ('pk', 'transactionDate', 'details', 'amount', 'isIncome')