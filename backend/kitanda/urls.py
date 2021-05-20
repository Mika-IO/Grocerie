from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenRefreshView, TokenObtainPairView
from kitanda.kitanda.viewsets import MarketViewSet, ProductViewSet, OrderViewSet
from kitanda.core.viewsets import (
    ChangePasswordView,
    LogoutView,
    UpdateProfileView,
)


router = DefaultRouter()

# API yourRoutes
router.register(r'markets', MarketViewSet, basename='markets')
router.register(r'products', ProductViewSet, basename='products')
router.register(r'orders', OrderViewSet, basename='orders')

schema_view = get_schema_view(
   openapi.Info(
      title="Kitanda.SHOP API",
      default_version='DEV',
      description="APIs to serve data to Kitanda.SHOP Marketplace app and website",
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('docs/', schema_view.with_ui('redoc', cache_timeout=0), name='DOCS'),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('reset_password/', include('django_rest_passwordreset.urls', namespace='password_reset')),
    path('change_password/<str:pk>/', ChangePasswordView.as_view(), name='change_password'),
    path('update_profile/<str:pk>/', UpdateProfileView.as_view(), name='auth_update_profile')
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
