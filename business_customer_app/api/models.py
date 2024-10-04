from django.db import models

class Customer(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    churn_probability = models.FloatField()

class SalesData(models.Model):
    product = models.CharField(max_length=100)
    sales_amount = models.FloatField()
    date = models.DateField()
