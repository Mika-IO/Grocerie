import json
from datetime import datetime

import pandas as pd
import csv, io
from django.shortcuts import render
from django.contrib import messages

from kitanda.kitanda.models import Product, Order, Market
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
        orders = Order.objects.filter(market=market, status='Finalizado', finalized_at__month=datetime.now().month)
        orders_count = len(list(orders))
        balance_count = sum([order.total_value for order in orders])
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
    return render(request, 'market/orders.html', {"orders": orders})


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
    print(len(orders))
    products = Product.objects.filter(market=market)
    search = request.GET.get('search')
    if search:
        products = products.annotate(
            search=SearchVector('name', 'descript', 'value'),
        ).filter(search=search)
    return render(request, 'client/orders.html', {"market": market, "products": products, "orders": orders})


@login_required
@csrf_protect
def market_checkout(request, pk):
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
    
    orders = Order.objects.filter(client=request.user)
    market = Market.objects.get(id=pk)
    products = Product.objects.filter(market=market)    

    # Checkout 
    card_hash = request.GET.get('card_hash')
    adress_street = request.GET.get('adress_street')
    adress_district = request.GET.get('adress_district')
    adress_number = request.GET.get('adress_number')
    adress_state = request.GET.get('adress_state')
    adress_city = request.GET.get('adress_city')
    if card_hash:
        """
                INTEGRAÇÂO JUNO TO DO:
                    * Gerar hash do cartão - Biblioteca de criptografia juno
                    Criar cobrança
                    Processar cobrança
        """
        print("\ncardhash: ", card_hash)
        #token_card = juno_provider.tokenize_credit_card(card_hash)
        payment_successfully = False
        if payment_successfully:
            market = Market.objects.get(id=pk)
            client = User.objects.get(id=request.user.id)
            order_data = {
                "adress_street": adress_street,
                "adress_number": adress_number,
                "adress_district": adress_district,
                "adress_state": adress_state,
                "adress_city": adress_city,
                "products": list(request.session[f'cart_{pk}'].values()),
                "total": total_value
            },
            order = Order(
                market=market,
                client=client,
                data=order_data,
                status='Pendente'
            )
            order.save()
            del request.session[f'cart_{pk}']
            return redirect(f'market_orders/{pk}')

    
    return render(request, 'client/checkout.html', {
        "market": market, 
        "cart": cart, 
        "orders":orders, 
        "total":total_value
        }
    )
