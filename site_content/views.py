from django.http import JsonResponse
from django.shortcuts import render
from .models import Portfolio


def index(request):
    portfolios = Portfolio.objects.all()

    return render(request, "site_content/index.html", {
        "portfolios": portfolios,
    })


def portfolio_api(request):
    portfolios = Portfolio.objects.all()

    data = []

    for portfolio in portfolios:
        data.append({
            "id": portfolio.id,
            "title": portfolio.title,
            "description": portfolio.description,
            "technologies": portfolio.technologies,
            "image": portfolio.image.url if portfolio.image else "",
        })

    return JsonResponse(data, safe=False)