from django.db import models
from kitanda.core.models import User
import uuid

# Fields de Dinheiro, Endereço e coordenadas

class Market(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, null=False, on_delete=models.CASCADE, verbose_name='usuário')
    name = models.CharField('nome do supermercado', null=True, max_length=250)
    email = models.EmailField('email', null=True) 
    cnpj = models.CharField('cnpj', null=True, max_length=14)
    bank = models.CharField('banco', null=True, max_length=250)
    bank_account = models.CharField('conta do banco', null=True, max_length=250)
    bank_agency = models.CharField('agência do banco', null=True,  max_length=250)
    pix = models.CharField('pix', null=True, max_length=250)
    adress_street = models.CharField('endereço rua', null=True, max_length=250)
    adress_number = models.IntegerField('endereço numero', null=True)
    adress_district = models.CharField('endereço bairo', null=True, max_length=250)
    city = models.CharField('cidade', null=True, max_length=250)
    state = models.CharField('estado', null=True, max_length=250)
    latitude = models.CharField('latitude', null=True, max_length=250)
    longitude = models.CharField('longitude', null=True, max_length=250)

    is_active = models.BooleanField('ativo', default=True)
    created_at = models.DateTimeField('criado em', auto_now_add=True)
    updated_at = models.DateTimeField('atualizado em ', auto_now_add=True)

    class Meta:
        db_table = 'market'
        verbose_name_plural = 'mercados'
        verbose_name = 'mercado'

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
    client = models.ForeignKey(User, null=False ,on_delete=models.CASCADE, verbose_name='cliente')
    products = models.ManyToManyField(Product, verbose_name='produtos')
    
    total_value = models.FloatField('valor total do pedido')
    kitanda_tax_per_cent = models.FloatField('taxa de compra kitanda')
    
    adress_street = models.CharField('endereço de entrega rua', null=True, max_length=250)
    adress_number = models.IntegerField('endereço de entrega numero', null=True)
    adress_district = models.CharField('endereço de entrega bairo', null=True, max_length=250)
    city = models.CharField('cidade', null=True, max_length=250)
    state = models.CharField('estado', null=True, max_length=250)
    
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
