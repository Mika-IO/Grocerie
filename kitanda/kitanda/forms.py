from django import forms

from kitanda.kitanda.models import Product, Order, Market

from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import get_user_model


User = get_user_model()

class UserForm(UserCreationForm):
    email = forms.CharField(max_length = 254, required = True, widget = forms.EmailInput())
    class Meta:
        model = User
        fields = ('email', 'password1', 'password2', )


class ProductForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = ('market','name', 'is_active' ,'descript', 'value', 'offer_value', 'quantity_in_stock', 'image')

    def __init__(self, *args, **kwargs):
        super(ProductForm, self).__init__(*args, **kwargs)
        for visible in self.visible_fields():
            if visible.name == "market":
                visible.field.widget.attrs['class'] = 'hidden'


class OrderForm(forms.ModelForm):    
    STATUS_CHOICES =(
        ("Pendente", "Pendente"),
        ("Em entrega", "Em entrega"),
        ("Finalizado", "Finalizado"),
    )
  
    status = forms.ChoiceField(choices=STATUS_CHOICES)
    class Meta:
        model = Order
        fields = (
            'status',
        )

class MarketForm(forms.ModelForm):
    latitude = forms.CharField(widget=forms.TextInput(attrs={'id':'latitude'}))
    longitude = forms.CharField(widget=forms.TextInput(attrs={'id':'longitude'}))
    class Meta:
        model = Market
        fields = (
            'name', 
            'cnpj', 
            'bank', 
            'bank_account', 
            'bank_agency', 
            'pix',
            'phone_number',
            'delivery_fee',
            'min_order_value',
            'adress_street',
            'adress_number',
            'adress_district',
            'city',
            'state',
            'latitude',
            'longitude',
        )