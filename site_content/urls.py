from django.urls import path
from . import views


urlpatterns = [
    path("", views.index, name="index"),
    path("api/portfolios/", views.portfolio_api, name="portfolio_api"),
]