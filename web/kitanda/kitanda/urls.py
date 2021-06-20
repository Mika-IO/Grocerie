from django.urls import path
import kitanda.kitanda.views as kitanda_views
from django.conf import settings
from django.conf.urls.static import static


app_name = 'kitanda'
urlpatterns = [
    path('', kitanda_views.home, name='home'),
    path('termos', kitanda_views.termos, name='termos'),
    # Market URLs
    path('dashboard', kitanda_views.dashboard, name='dashboard'),
    path('orders', kitanda_views.orders, name='orders'),
    path('products', kitanda_views.products, name='products'),
    path('products/add', kitanda_views.add_product, name='add'),
    path('products/edit/<uuid:pk>', kitanda_views.edit_product, name='edit'),
    path('orders/edit/<uuid:pk>', kitanda_views.edit_order, name='edit'),
    path('products/import_table_products', kitanda_views.import_table_products, name='import_table_products'),
    path('configurations', kitanda_views.configurations, name='configurations'),
    # Client URLs
    path('markets', kitanda_views.markets, name='markets'),
    path('market/<uuid:pk>', kitanda_views.market, name='market')
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)