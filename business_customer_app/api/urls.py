from django.urls import path
from . import views

urlpatterns = [
    path('business/churn-prediction/', views.churn_prediction, name='churn-prediction'),
    path('business/sales-forecasting/', views.sales_forecasting, name='sales-forecasting'),
    path('customer/recommendations/', views.product_recommendations, name='product-recommendations'),
    path('business/calculate-clv/', views.calculate_clv, name='calculate-clv'),
    path('api/dashboard/', views.dashboard_metrics, name='dashboard_metrics'),

]
