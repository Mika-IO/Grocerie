from django.db import models
from kitanda.core.models import User
from django.contrib.postgres.fields import JSONField
import uuid

def image_dir_path_products(instance, filename):
    extension = filename.split('.')[-1]
    filename = str(instance.pk) + '.' + str(extension)
    return os.path.join('products/', filename)

# ToDo --> Fields de Dinheiro, Endereço e coordenadas
class BaseConfiguration(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    kitanda_tax = models.FloatField('taxa do kitanda', null=True)
    delivery_fee_percent = models.FloatField('percentual da taxa de entrega', null=True)
    pix_cost_percent = models.FloatField('porcentagem de custo com o pix', null=True)
    
    class Meta:
        db_table = 'base_configuration'
        verbose_name_plural = 'configuração'
        verbose_name = 'configuração'

    def __str__(self):
        return str("Configuração kitanda")


class Market(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, null=False, on_delete=models.CASCADE, verbose_name='usuário')
    name = models.CharField('nome do supermercado', null=False, blank=False, max_length=250)
    cnpj = models.CharField('cnpj', null=True, max_length=14)
    bank = models.CharField('banco', null=True, max_length=250)
    bank_account = models.CharField('conta do banco', null=True, max_length=250)
    bank_agency = models.CharField('agência do banco', null=True,  max_length=250)
    pix = models.CharField('pix', null=True, max_length=250)
    delivery_fee = models.FloatField('taxa de entrega', null=True)
    min_order_value = models.FloatField('valor mínimo do pedido', null=True)
    phone_number = models.CharField('phone_number', max_length=18)
    adress_street = models.CharField('rua', null=True, max_length=250)
    adress_number = models.IntegerField('numero', null=True)
    adress_district = models.CharField('bairro', null=True, max_length=250)
    city = models.CharField('cidade', null=True, max_length=250)
    state = models.CharField('estado', null=True, max_length=250)
    latitude = models.CharField('latitude', null=True, max_length=250)
    longitude = models.CharField('longitude', null=True, max_length=250)

    is_active = models.BooleanField('ativo', default=False)
    created_at = models.DateTimeField('criado em', auto_now_add=True)
    updated_at = models.DateTimeField('atualizado em ', auto_now_add=True)

    class Meta:
        db_table = 'market'
        verbose_name_plural = 'mercados'
        verbose_name = 'mercado'

    def __str__(self):
        return str(self.name)
        

class Product(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField('nome', max_length=250)
    market = models.ForeignKey(Market, related_name="market", null=False ,on_delete=models.CASCADE, verbose_name='mercado')
    descript = models.CharField('descrição', max_length=250)
    value = models.FloatField('valor')
    offer_value = models.FloatField('valor de oferta')
    quantity_in_stock = models.IntegerField('quantidade em estoque')
    image = models.ImageField('imagem do produto', upload_to=image_dir_path_products, max_length=100, default='default.png')

    is_active = models.BooleanField('ativo', default=True)
    created_at = models.DateTimeField('criado em', auto_now_add=True)
    updated_at = models.DateTimeField('atualizado em ', auto_now_add=True)

    class Meta:
        db_table = 'product'
        verbose_name_plural = 'produtos'
        verbose_name = 'produto'

    def __str__(self):
        return str(self.name)


class Order(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    market = models.ForeignKey(Market, null=False ,on_delete=models.CASCADE, verbose_name='mercado')
    client = models.ForeignKey(User, null=False ,on_delete=models.CASCADE, verbose_name='cliente')
    client_name = models.CharField('client_name', max_length=100 , null=True)
    client_cpf = models.CharField('cpf', max_length=100 , null=True)
    client_phone = models.CharField('phone', max_length=100 , null=True)

    address_number = models.CharField('número', max_length=100 , null=True)
    address_street = models.CharField('rua', max_length=100 , null=True)
    address_district = models.CharField('bairro', max_length=100 , null=True)

    total = models.FloatField('total', null=True)

    kitanda_tax = models.FloatField('taxa do kitanda', null=True)
    delivery_fee_percent = models.FloatField('percentual da taxa de entrega para o kitanda', null=True)
    pix_cost_percent = models.FloatField('porcentagem de custo com o pix no pedido', null=True)

    delivery_fee = models.FloatField('taxa de entrega', null=True)

    pix_cost = models.FloatField('custo com o pix no pedido', null=True)
    market_receivable = models.FloatField('recebível do mercado', null=True)
    kitanda_receivable = models.FloatField('recebível do kitanda', null=True)
    
    products = JSONField()

    status = models.CharField('status', max_length=50 ,default='Pendente')

    market_payed = models.BooleanField('o supermercado já foi pago por esse pedido?', null=True, default=False)
    finalized_at = models.DateTimeField('finalizado em ', null=True)

    is_active = models.BooleanField('ativo', default=True)
    created_at = models.DateTimeField('criado em', auto_now_add=True)
    updated_at = models.DateTimeField('atualizado em ', auto_now_add=True)

    class Meta:
        db_table = 'order'
        verbose_name_plural = 'pedidos'
        verbose_name = 'pedido'

    def __str__(self):
        return str(self.client.email) + " " + str(self.market.name)
