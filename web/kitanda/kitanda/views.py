import json
from datetime import datetime

import pandas as pd
import csv, io
from django.shortcuts import render
from django.contrib import messages

from kitanda.kitanda.models import Product, Order, Market
from .forms import UserForm, MarketForm, ProductForm, OrderForm

# from django.contrib.postgres.search import SearchVector
from django import forms
from django.contrib.auth.decorators import login_required
from django.core.paginator import Paginator
from django.views.decorators.csrf import csrf_protect
from django.contrib.auth import authenticate
from django.shortcuts import render, redirect
from django.utils.encoding import force_bytes
from django.contrib.auth import login as auth_login
from django.contrib.auth.models import User

@csrf_protect
def register(request):
    if request.method == 'POST':
        form = UserForm(request.POST)
        if form.is_valid():
            user = form.save()
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=user.email, password=raw_password)
            auth_login(request, user)
            return redirect('/dashboard')
    else:
        form = UserForm()
    return render(request, 'registration/register.html', {'form': form})


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
    return render(request, 'market/dashboard.html', {})


@login_required
@csrf_protect
def products(request):
    market = Market.objects.filter(user=request.user)
    if market:
        market = market[0]
        products = Product.objects.filter(market=market)
        # search = request.GET.get('search')
        # if search:
        #     context = products.objects.annotate(
        #         search=SearchVector('id_resposta', 'nome_completo', 'categoria_profissional', 'cpf'),
        #     ).filter(search=search)
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

@login_required
@csrf_protect
def markets(request):
    return render(request, 'client/markets.html', {})

@csrf_protect
def listing_products(request):
    return render(request, 'client/listing-products.html', {})

    