from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.decorators import api_view
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.authtoken.models import Token
from rest_framework.response import Response 
from rest_framework_simplejwt.token_blacklist.models import (
    BlacklistedToken,
    OutstandingToken,
)
from rest_framework_simplejwt.views import TokenObtainPairView

from .models import User
from .serializers import (
    ChangePasswordSerializer,
    UpdateUserSerializer,
    UserSerializer,
    TokenObtainPairSerializer
)


class LogoutView(APIView):
    """
        A endpoint to logout the user access token
    """
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        tokens = OutstandingToken.objects.filter(user_id=request.user.id)
        for token in tokens:
            t, _ = BlacklistedToken.objects.get_or_create(token=token)
        return Response(status=status.HTTP_205_RESET_CONTENT)

class ChangePasswordView(generics.UpdateAPIView):
    """
        A endpoint to change the user password
    """
    queryset = User.objects.all()
    permission_classes = (IsAuthenticated,)
    serializer_class = ChangePasswordSerializer


class ProfileViewSet(viewsets.ModelViewSet):
    """
        GET current profile view or UPDATE it
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def list(self, request):
        users = User.objects.filter(id=request.query_params.get('user_id'))
        serializers = self.get_serializer(users, many=True)
        return Response(serializers.data)


class RegisterViewSet(viewsets.ModelViewSet):
    """
        GET current profile view or UPDATE it
    """
    serializer_class = UserSerializer

    def get_queryset(self):
        return []

    def post(self, request):
        if serialized.is_valid():
            user = User.objects.create_user(
                email=request.data["email"],
            )
            user.set_password(request.data["password"])
            return Response(serialized.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serialized._errors, status=status.HTTP_400_BAD_REQUEST)


class ObtainAuthToken(TokenObtainPairView):
    serializer_class = TokenObtainPairSerializer