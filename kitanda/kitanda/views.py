import json
from datetime import datetime

import ast

from django.conf import settings

from decouple import config
import requests

import pandas as pd
import csv, io
from django.shortcuts import render
from django.contrib import messages

import base64

from kitanda.kitanda.models import Product, Order, Market, BaseConfiguration
from .forms import UserForm, MarketForm, ProductForm, OrderForm

from django.contrib.postgres.search import SearchVector
from django import forms
from django.contrib.auth.decorators import login_required
from django.core.paginator import Paginator
from django.views.decorators.csrf import csrf_protect
from django.contrib.auth import authenticate
from django.shortcuts import render, redirect
from django.utils.encoding import force_bytes
from django.contrib.auth import login as auth_login
from kitanda.core.models import User


@csrf_protect
def home(request):
    return render(request, 'home.html', {})


@login_required
@csrf_protect
def termos(request):
    return render(request, 'termos.html', {})


# MARKET'S VIEWS

@login_required
@csrf_protect
def dashboard(request):
    market = Market.objects.filter(user=request.user)
    if market:
        market = market[0]
        orders = Order.objects.filter(market=market, status='Finalizado', created_at__month=datetime.now().month)
        orders_count = len(list(orders))
        balance_count = sum([order.data[0]["total"] for order in orders])
    else:
        return redirect('/configurations')
    return render(request, 'market/dashboard.html', { 'orders': orders_count, 'balance': balance_count})


@login_required
@csrf_protect
def products(request):
    market = Market.objects.filter(user=request.user)
    if market:
        market = market[0]
        products = Product.objects.filter(market=market)
        search = request.GET.get('search')
        if search:
            products = products.annotate(
                search=SearchVector('name', 'descript', 'value'),
            ).filter(search=search)
    else:
        return redirect('/configurations')
    return render(request, 'market/products.html', {"products":products})


@login_required
@csrf_protect
def edit_product(request, pk):
    if request.method == 'POST':
        product = Product.objects.get(id=pk)
        form = ProductForm(request.POST, instance=product)
        if form.is_valid():
            form = form.save()
            return redirect('/products')
    else:
        product = Product.objects.get(id=pk)
        form = ProductForm(instance=product)
    return render(request, 'market/edit_product.html', {"form": form, "product":product})


@login_required
@csrf_protect
def add_product(request):
    if request.method == 'POST':
        form = ProductForm(request.POST)
        if form.is_valid():
            form = form.save()
            return redirect('/products')
    else:
        market = Market.objects.filter(user=request.user)
        if market:
            market = market[0]
            form = ProductForm(initial={'market': market.id})
        else:
            return redirect('/configurations')
    return render(request, 'market/add_product.html', {"form": form})


@login_required
@csrf_protect
def import_table_products(request):
    if request.method == "POST":
        market = Market.objects.filter(user=request.user)
        if market:
            market = market[0]
        else:
            market = Market.objects.create(user=request.user)
        csv_file = request.FILES['file']
        # let's check if it is a csv file
        if not csv_file.name.endswith('.csv'):
            messages.error(request, 'Este arquivo não é um arquivo CSV!')
            return render(request, "import_table_products.html")
        data_frame = pd.read_csv(csv_file ,sep=';')

        for index, row in data_frame.iterrows():
            Product.objects.create(
                name = row['nome'],
                market = market,
                descript = row['descrição'],
                value = row['valor'],
                offer_value = row['valor em oferta'],
                quantity_in_stock = row['quantidade em estoque'],
            )
        return redirect("/products")
    else:
        return render(request, "market/import_table_products.html")


@login_required
@csrf_protect
def orders(request):
    market = Market.objects.filter(user=request.user)
    if market:
        market = market[0]
        orders = Order.objects.filter(market=market)
        search = request.GET.get('search')
        if search:
            orders = orders.annotate(
                search=SearchVector('id', 'data', 'status'),
            ).filter(search=search)
    else:
        return redirect('/configurations')
    return render(request, 'market/orders.html', {"orders": reversed(orders)})


@login_required
@csrf_protect
def edit_order(request, pk):
    if request.method == 'POST':
        order = Order.objects.get(id=pk)
        form = OrderForm(request.POST, instance=order)
        if form.is_valid():
            form = form.save()
            return redirect('/orders')
    else:
        order = Order.objects.get(id=pk)
        form = OrderForm(instance=order)
    return render(request, 'market/edit_order.html', {"form": form, "order":order})


@login_required
@csrf_protect
def configurations(request):
    if request.method == 'POST':
        market = Market.objects.get(user=request.user)
        form = MarketForm(request.POST, instance=market)
        if form.is_valid():
            user = form.save()
            return render(request, 'market/configurations.html', {"form": form})
    else:
        market = Market.objects.filter(user=request.user)
        if market:
            market = market[0]
        else:
            market = Market.objects.create(user=request.user)
        form = MarketForm(instance=market)
    return render(request, 'market/configurations.html', {"form": form})


# CLIENT'S VIEWS

@csrf_protect
def markets(request):
    markets = Market.objects.all()
    return render(request, 'client/markets.html', {'markets': markets})


@csrf_protect
def market(request, pk):
    if request.session.get(f'cart_{pk}') is None:
        request.session[f'cart_{pk}'] = {}

    add_product = request.GET.get('add_product')
    if add_product:
        product = Product.objects.get(id=add_product)
        if add_product not in request.session.get(f'cart_{pk}'):
            request.session.get(f'cart_{pk}')[add_product] = {
                "id": str(product.id),
                "name": str(product.name),
                "image": str(product.image),
                "quantity": 1,
                "sub_total": float(product.value),
            }
        else:
            quantity = request.session.get(f'cart_{pk}')[add_product]["quantity"] + 1
            sub_total = request.session.get(f'cart_{pk}')[add_product]["sub_total"] + float(product.value)
            request.session.get(f'cart_{pk}')[add_product] = {
                "id": str(product.id),
                "name": str(product.name),
                "image": str(product.image),
                "quantity": quantity,
                "sub_total": sub_total,
            }
        request.session.modified = True

    remove_product = request.GET.get('remove_product')
    if remove_product:
        if remove_product in request.session.get(f'cart_{pk}'):
            product = Product.objects.get(id=remove_product)
            quantity = request.session.get(f'cart_{pk}')[remove_product]["quantity"] - 1
            sub_total = request.session.get(f'cart_{pk}')[remove_product]["sub_total"] - float(product.value)
            request.session.get(f'cart_{pk}')[remove_product] = {
                "id": str(product.id),
                "name": str(product.name),
                "image": str(product.image.url),
                "quantity": quantity,
                "sub_total": sub_total,
            }
            if request.session.get(f'cart_{pk}')[remove_product]["quantity"] == 0:
                del request.session.get(f'cart_{pk}')[remove_product]
            request.session.modified = True
    
    cart = request.session[f'cart_{pk}']
    total_value = 0
    for product in list(cart):
        total_value += cart[product]["sub_total"]
        
    market = Market.objects.get(id=pk)
    products = Product.objects.filter(market=market)
    search = request.GET.get('search')
    if search:
        products = products.annotate(
            search=SearchVector('name', 'descript', 'value'),
        ).filter(search=search)
    
    return render(request, 'client/market.html', {
        "market": market, 
        "products": products, 
        "cart": cart, 
        "total": total_value,
        "search": search,
        }
    )


@login_required
@csrf_protect
def market_orders(request, pk):
    user = User.objects.get(email=request.user)
    market = Market.objects.get(id=pk)
    orders = Order.objects.filter(client=user, market=market)
    products = Product.objects.filter(market=market)
    search = request.GET.get('search')
    if search:
        products = products.annotate(
            search=SearchVector('name', 'descript', 'value'),
        ).filter(search=search)
    return render(request, 'client/orders.html', {"market": market, "products": products, "orders": reversed(orders)})


@login_required
@csrf_protect
def market_checkout(request, pk):
    kitanda_config = BaseConfiguration.objects.first()
    user = User.objects.get(email=request.user)
    market = Market.objects.get(id=pk)

    add_product = request.GET.get('add_product')
    if add_product:
        product = Product.objects.get(id=add_product)
        if add_product not in request.session.get(f'cart_{pk}'):
            request.session.get(f'cart_{pk}')[add_product] = {
                "id": str(product.id),
                "name": str(product.name),
                "image": str(product.image),
                "quantity": 1,
                "sub_total": float(product.value),
            }
        else:
            quantity = request.session.get(f'cart_{pk}')[add_product]["quantity"] + 1
            sub_total = request.session.get(f'cart_{pk}')[add_product]["sub_total"] + float(product.value)
            request.session.get(f'cart_{pk}')[add_product] = {
                "id": str(product.id),
                "name": str(product.name),
                "image": str(product.image),
                "quantity": quantity,
                "sub_total": sub_total,
            }
        request.session.modified = True

    remove_product = request.GET.get('remove_product')
    if remove_product:
        if remove_product in request.session.get(f'cart_{pk}'):
            product = Product.objects.get(id=remove_product)
            quantity = request.session.get(f'cart_{pk}')[remove_product]["quantity"] - 1
            sub_total = request.session.get(f'cart_{pk}')[remove_product]["sub_total"] - float(product.value)
            request.session.get(f'cart_{pk}')[remove_product] = {
                "id": str(product.id),
                "name": str(product.name),
                "image": str(product.image.url),
                "quantity": quantity,
                "sub_total": sub_total,
            }
            if request.session.get(f'cart_{pk}')[remove_product]["quantity"] == 0:
                del request.session.get(f'cart_{pk}')[remove_product]
            request.session.modified = True
    
    cart = request.session[f'cart_{pk}']
    total_value = 0
    for product in list(cart):
        total_value += cart[product]["sub_total"]   
    total_value = total_value + kitanda_config.kitanda_tax + market.delivery_fee

    orders = Order.objects.filter(client=request.user)
    market = Market.objects.get(id=pk)
    products = Product.objects.filter(market=market)    

    # Checkout 

    error = ""

    name = request.GET.get('name')
    cpf = request.GET.get('cpf')
    card_hash = request.GET.get('card_hash')
    address_street = request.GET.get('address_street')
    address_district = request.GET.get('address_district')
    address_number = request.GET.get('address_number')
    address_state = request.GET.get('address_state')
    address_city = request.GET.get('address_city')
    address_cep = request.GET.get('address_cep')
    if card_hash and total_value > market.min_order_value:
        """
                INTEGRAÇÂO JUNO:
                    OK Autenticar
                    OK Gerar hash do cartão - Biblioteca de criptografia juno
                    OK Criar cobrança
                    OK Processar cobrança
        """
        payment_happening_successfully = True
        
        # GET ACCESS TOKEN
        if payment_happening_successfully:
            url = f'{settings.JUNO_SERVER}/authorization-server/oauth/token'
            data = {'grant_type': 'client_credentials'}
            response = requests.post(url, data=data, auth=(settings.JUNO_CLIENT_ID, settings.JUNO_CLIENT_KEY))
            content = json.loads(response.content)
            access_token = content.get('access_token')
            
            headers = {
                'Authorization': f'Bearer {access_token}',
                'X-Api-Version': '2',
                'X-Resource-Token': settings.JUNO_RESOURCE_TOKEN
            }
            if response.status_code == 200:
                payment_happening_successfully = True
            else:
                error = 'ERRO AO SE CONECTAR A API DE PAGAMENTO'
                payment_happening_successfully = False

        # TOKENIZAR CARTÃO DE CRÉDITO
        if payment_happening_successfully:
            url = f'{settings.JUNO_SERVER}api-integration/credit-cards/tokenization'
            data = {
                'creditCardHash': card_hash
            }
            response = requests.post(url, json=data, headers=headers)
            if response.status_code == 200:
                credit_card = dict(json.loads(response.content))
                payment_happening_successfully = True
            else:
                error = 'ERRO AO VERIFICAR CARTÃO DE CRÉDITO'
                payment_happening_successfully = False

        # CRIAR COBRANÇA
        if payment_happening_successfully:
            url = f'{settings.JUNO_SERVER}api-integration/charges'
            data = {
                'charge': {
                    'description': f"Compra no supermercado {market.name} na plataforma Kitanda.SHOP",
                    'amount': total_value,
                    'paymentTypes': ['CREDIT_CARD'],
                },
                'billing': {
                    'name': name,
                    'document': cpf,
                    'email': "",
                    'phone': "",
                    'birthDate': "",
                    'notify': False
                }
            }
            response = requests.post(url, json=data, headers=headers)
            if response.status_code == 200:
                charge = dict(json.loads(response.content)["_embedded"]["charges"][0])
                payment_happening_successfully = True
            else:
                error = 'ERRO AO CRIAR COBRANÇA'
                payment_happening_successfully = False
            
        # PROCESSAR COBRANÇA
        if payment_happening_successfully:
            url = f'{settings.JUNO_SERVER}api-integration/payments/'
            credit_card_details = {'creditCardId': credit_card["creditCardId"]}
            data = {
                'chargeId': charge["id"],
                'billing': {
                    'email': user.email,
                    'address': {
                        'street': address_street,
                        'number': address_number,
                        'city': address_city,
                        'state': address_state.upper(),
                        "postCode": address_cep
                    }
                },
                'creditCardDetails': credit_card_details
            }
            response = requests.post(url, json=data, headers=headers)
            if response.status_code == 200:
                payment_happening_successfully = True
            else:
                error = "ERRO AO PROCESSAR COBRANÇA"
                payment_happening_successfully = False

        # FECHAR PEDIDO   
        if payment_happening_successfully:
            products = list(request.session[f'cart_{pk}'].values())
            order = Order(
                market=market,
                client=user,
                products=products,
                status='Pendente',
                total=total_value,
                address_street=address_street,
                address_number=address_number,
                address_district=address_district,
                address_state=address_state,
                address_city=address_city,
            )
            order.save()
            del request.session[f'cart_{pk}']
            return render(request, 'client/sucess_payment.html', {
                "market": market, 
                "total": total_value,
                "orders": f'market_orders/{pk}',
            })
    else:
        if card_hash:
            error = "ERRO AO VALIDAR CARTÃO DE CRÉDITO"
        if total_value < market.min_order_value:
            error = f"O pedido tem o valor menor que o mínimo de R${market.min_order_value}"

    crypto_lib_src = config('SRC_CRYPTO_LIB', default='')
    juno_public_key = config('JUNO_PUBLIC_KEY', default='')
    
    return render(request, 'client/checkout.html', {
            "market": market, 
            "cart": cart, 
            "orders":orders, 
            "total":total_value,
            "config": kitanda_config,
            "error": error
        }
    )
