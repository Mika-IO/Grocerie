from django.db import models
from kitanda.core.models import User
import uuid

# Fields de Dinheiro, Endereço e coordenadas

class Market(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, null=False ,on_delete=models.CASCADE, verbose_name='usuário')
    name = models.CharField('nome', max_length=250)
    email = models.EmailField('email') 
    cnpj = models.CharField('cnpj', max_length=14)
    payment_method = models.CharField('meio de pagamento', max_length=250)
    localization = models.CharField('endereço', max_length=250)
    latitude = models.CharField('latitude', max_length=250)
    longitude = models.CharField('longitude', max_length=250)

    is_active = models.BooleanField('ativo', default=True)
    created_at = models.DateTimeField('criado em', auto_now_add=True)
    updated_at = models.DateTimeField('atualizado em ', auto_now_add=True)

    class Meta:
        db_table = 'market'
        verbose_name_plural = 'mercados'
        verbose_name = 'mercado'

    def __str__(self):
        return self.name


class Client(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, null=False ,on_delete=models.CASCADE, verbose_name='usuário')
    name = models.CharField('nome', max_length=250)
    email = models.EmailField('email') 
    payment_method = models.CharField('meio de pagamento', max_length=250)
    localization = models.CharField('endereço', max_length=250)
    latitude = models.CharField('latitude', max_length=250)
    longitude = models.CharField('longitude', max_length=250)

    is_active = models.BooleanField('ativo', default=True)
    created_at = models.DateTimeField('criado em', auto_now_add=True)
    updated_at = models.DateTimeField('atualizado em ', auto_now_add=True)

    class Meta:
        db_table = 'client'
        verbose_name_plural = 'clientes'
        verbose_name = 'cliente'

    def __str__(self):
        return self.name

class Product(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField('nome', max_length=250)
    market = models.ForeignKey(Market, null=False ,on_delete=models.CASCADE, verbose_name='mercado')
    descript = models.CharField('descrição', max_length=250)
    value = models.FloatField('valor')
    offer_value = models.FloatField('valor de oferta')
    quantity_in_stock = models.IntegerField('quantidade em estoque')
    image = models.ImageField('imagem do produto')

    is_active = models.BooleanField('ativo', default=True)
    created_at = models.DateTimeField('criado em', auto_now_add=True)
    updated_at = models.DateTimeField('atualizado em ', auto_now_add=True)

    class Meta:
        db_table = 'product'
        verbose_name_plural = 'produtos'
        verbose_name = 'produto'

    def __str__(self):
        return self.order.name


class Order(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    market = models.ForeignKey(Market, null=False ,on_delete=models.CASCADE, verbose_name='mercado')
    client = models.ForeignKey(Client, null=False ,on_delete=models.CASCADE, verbose_name='cliente')
    products = models.ManyToManyField(Product, verbose_name='produtos')
    total_value = models.FloatField('valor total do pedido')
    kitanda_tax_per_cent = models.FloatField('taxa de compra kitanda')
    adress_to_delivery = models.CharField('endereço do pedido', max_length=500)
    pick_up_at_the_counter = models.BooleanField('pegar no balcão?', default=False)
    finalized_at = models.DateTimeField('finalizado em ')

    is_active = models.BooleanField('ativo', default=True)
    created_at = models.DateTimeField('criado em', auto_now_add=True)
    updated_at = models.DateTimeField('atualizado em ', auto_now_add=True)

    class Meta:
        db_table = 'order'
        verbose_name_plural = 'pedidos'
        verbose_name = 'pedido'

    def __str__(self):
        return str(self.client.name) + str(self.market.name)
