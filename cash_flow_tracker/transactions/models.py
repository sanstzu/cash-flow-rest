from django.db import models

# Create your models here.
class Transaction(models.Model):
    transactionDate = models.DateField("Transaction Date", auto_now_add=True)
    details = models.CharField("Details", max_length=250)
    amount = models.FloatField("Amount")
    isIncome = models.BooleanField("Is Income", default=True)

    def __str__(self):
        return self.details