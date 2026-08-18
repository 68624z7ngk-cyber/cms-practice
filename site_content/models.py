from django.db import models


class Portfolio(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to="portfolio/", blank=True, null=True)
    description = models.TextField(blank=True)
    technologies = models.CharField(max_length=300, blank=True)

    def __str__(self):
        return self.title


class Profile(models.Model):
    name = models.CharField(max_length=100)
    job_title = models.CharField(max_length=200)

    def __str__(self):
        return self.name