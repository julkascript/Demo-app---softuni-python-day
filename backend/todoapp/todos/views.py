from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

import json

from todos.models import Todo
from todos.permissions import UserIsOwnerTodo
from todos.serializers import TodoSerializer

class TodoViewSet(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    permission_classes = (IsAuthenticated, UserIsOwnerTodo)
    queryset = Todo.objects.all()

    def create(self, request):
        r = request.body.decode('utf-8')
        body_data = json.loads(r)
        Todo.objects.create(user=request.user, name=body_data['name'])
        return Response(status=201)

