from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from clients import views

router = routers.DefaultRouter()
router.register(r'clients', views.ClientView, 'clients')

urlpatterns = [
    path("api/v1/", include(router.urls) ),
    path("docs/", include_docs_urls(title="Clients API"))
]