<div align='center'>
    <img height="300px" width="300px" src='frontend/src/assets/logo-icon.png'></img><br/><br/>
    <h2><b>A online supermarket plataform 💸</b></h2>
    <img src='https://img.shields.io/badge/Python-3.9.2-blue'></img>
    <img src='https://img.shields.io/badge/FastAPI-x.x.x-red'></img>
    <img src='https://img.shields.io/badge/React-16.14.3-green'></img>  
    <img src='https://img.shields.io/badge/Ionic-5.5.x-red'></img>
    
</div>

## *Website*

[Kitanda.SHOP](https://www.kitanda.shop/)

## *App*

[no-available]()
# :pushpin: **TODO** 

## EPIC -> STATIC FRONTEND VISUAL

Make the front with all frontend features with static data

> Do home page to present Kitanda :heavy_check_mark:

> Do login and register component :heavy_check_mark:

   - Is reusable by user and markets
   - Is not show if user is logged 

> Do page map to navegate by markets in marketplace :heavy_check_mark:

> Do checkout page :heavy_check_mark:

> Shopping cart page :heavy_check_mark:

   - Separate orders by markets 
   - Delete produts
   - Change products quantity

> Markets manager page :warning:

   - Market can list products registered
   - Market can remove a product registered
   - Market CSV import products with react-csv-importer
   - Market can setting tax
   - Market can manage orders

> Cliente manager page :warning:

   - User see orders
   - User can cancel orders
   - User can see perfil


> Map all data model needed and put in Models Database Schema :warning:

## EPIC -> DINAMIC FRONTEND WITH FASTAPI WITH LOCAL DATABASE

Create and setting a API with Django and Django REST Framework 

## EPIC -> DEPLOY CI/CD AND APP COMPILATION

Configure the CI/CD in amazon lightsail and AppFlow

## Models Database Schema

- Store:
   
   - name 
   - email 
   - cnpj 
   - products
   - opening hours
   - payment method
   - localization

- Product:
   
   - name
   - code_id
   - categorie_tag
   - descript
   - value
   - offer_value
   - quantity_in_stock

# Frontend

The frontend is a react/ionic app consuming the API, deployed to web and mobile app.

## Intall project dependencies

    npm install

## Runnig project in devEnv

- Go to the project: cd .\frontend
- Run ionic serve to show app in browser
- Run ionic capacitor add to add a native iOS or Android project using Capacitor
- Generate your app icon and splash screens using cordova-res --skip-config --copy
- Explore the Ionic docs: https://ion.link/docs

## Tests

    have no tests in moment

## Capacitor

    npx cap add android
    npx cap add ios
    npx cap add electron
    
## Build

    npm run build


# BACKEND

The backend is a API make with Django and Django REST Framework