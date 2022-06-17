from django.urls import path
from rest_framework import routers

from todos.views import TodoViewSet

app_name = 'todos'
router = routers.SimpleRouter()
router.register('', TodoViewSet, basename='todos')

urlpatterns = router.urls
