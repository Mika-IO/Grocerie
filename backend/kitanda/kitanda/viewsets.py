from rest_framework import permissions, viewsets

from .models import Market, Product, Order

from .serializers import MarketSerializer, ProductSerializer, OrderSerializer

class MarketViewSet(viewsets.ReadOnlyModelViewSet):
    """
        GET Markets data
    """
    # permission_classes = [permissions.IsAuthenticated]
    serializer_class = MarketSerializer
    queryset = Market.objects.all()


class ProductViewSet(viewsets.ReadOnlyModelViewSet):
    """
        GET Products data
    """
    # permission_classes = [permissions.IsAuthenticated]
    serializer_class = ProductSerializer
    queryset = Product.objects.all()


class OrderViewSet(viewsets.ReadOnlyModelViewSet):
    """
        GET Orders data
    """
    # permission_classes = [permissions.IsAuthenticated]
    serializer_class = OrderSerializer
    queryset = Order.objects.all()
