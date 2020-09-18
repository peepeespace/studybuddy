from slacker import Slacker

from django.contrib.auth import authenticate

from rest_framework import generics, status
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework.response import Response
from rest_framework.views import APIView

from core.models import User, Message, Class
from core.serializers import UserSerializer, MessageSerializer, ClassSerializer

from dotenv import load_dotenv

load_dotenv(verbose=True)

SLACK_TOKEN = os.getenv('SLACK_TOKEN')
# How to access user after defining own user model:
# https://stackoverflow.com/questions/17873855/manager-isnt-available-user-has-been-swapped-for-pet-person

# https://medium.com/@apogiatzis/create-a-restful-api-with-users-and-jwt-authentication-using-django-1-11-drf-part-2-eb6fdcf71f45


class UserViewList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    # def create(self, request, *args, **kwargs):
    #     serializer = self.get_serializer(data=request.data)
    #     serializer.is_valid(raise_exception=True)
    #     self.perform_create(serializer)
    #     headers = self.get_success_headers(serializer.data)
    #     return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class LoginView(APIView):
    def post(self, request):
        id = request.data.get('username')
        pw = request.data.get('password')
        user = authenticate(username=id, password=pw)
        if user is not None:
            try:
                return Response({'Token': user.auth_token.key, 'id': user.id})
            except:
                return Response({'success': 'login success, but no token available'})
        else:
            return Response({'fail': 'no such user'})


class MessageView(APIView):
    def get(self, request):
        return Response({'message': 'GET not available'})
    
    def post(self, request):
        name = request.data.get('name')
        phone = request.data.get('phone')
        email = request.data.get('email')
        content = request.data.get('content')
        
        slack = Slacker(SLACK_TOKEN)
        slack.chat.post_message(
            '#general',
            f'👋 MESSAGE -- 이름: {name}, 핸드폰: {phone}, 이메일: {email}, 메세지: {content}'
        )
        msg = Message(name=name, phone=phone, email=email, content=content)
        msg.save()
        return Response({'id': msg.id, 'status': 'CREATED'})


class ClassListView(generics.ListCreateAPIView):
    queryset = Class.objects.all()
    serializer_class = ClassSerializer
    filter_backends = [SearchFilter, OrderingFilter]

    def create(self, request, *args, **kwargs):
        if request.user.is_staff == True:
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)
            headers = self.get_success_headers(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
        else:
            return Response({'FAILED': 'Cannot POST. Not authorized'}, status=403)

    def get_queryset(self, *args, **kwargs):
        queryset = Class.objects.all()
        category_by = self.request.GET.get('category')
        if category_by:
            queryset = queryset.filter(category=category_by)
        return queryset


# class MessageViewList(generics.ListCreateAPIView):
#     queryset = Message.objects.all()
#     serializer_class = MessageSerializer

'''
요청 보내는 법:
import json, requests
data = { ... }
headers = {'Content-Type': 'application/json'}
r = requests.post(url, data=data, headers=headers)
'''
