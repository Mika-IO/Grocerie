<div align='center'>
    <img height="50px" width="50px" src='frontend/src/assets/logo-icon.png'></img><br/><br/>
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

> Do page map to navegate by markets in marketplace :warning:

> Do checkout page using stripe elements to speed up :warning:

> Shopping cart page :warning:

   - Separate orders by markets 
   - Delete produts
   - Change products quantity

> Markets manager page :warning:

   - Products registration sytem
   - Delivery settings 
   - Pick up at the counter settings
   - Orders management

> Map all data model needed and put in Models Database Schema :warning:

## EPIC -> DINAMIC FRONTEND WITH FASTAPI WITH LOCAL DATABASE

Create and setting a API with FastAPI/mongoDB so delivery and connect it to react frontend. 

## *UTILS*:
   
   Do zero a implatação FastAPI:
   https://github.com/cassiobotaro/do_zero_a_implantacao
   
   MongoDB com python:
   https://github.com/Mika-IO/30-Days-Of-Python/blob/master/27_Day_Python_with_mongodb/27_python_with_mongodb.md

## EPIC -> DEPLOY CI/CD AND APP COMPILATION

Configure the database mongoDB in atlas and project automatic and continuos deployment and delivery. compile APK version and publish it.

### *UTILS*:
  
   Deploy monorepo com frontend e backend separado no heroku
   https://medium.com/softup-technologies/how-to-deploy-a-monorepo-to-multiple-heroku-apps-using-github-actions-65e87dc27878
  
   https://github.com/zeroabsolute/MonorepoHerokuDeployment

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

The backend is a API make with FastAPI and mongoDB as database
