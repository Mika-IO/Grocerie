<div align='center'>
    <img height="300px" width="300px" src='src/frontend_client/src/assets/logo-icon.png'></img><br/><br/>
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


> Basic project frontend MarketManager :heavy_check_mark:

> Basic project frontend Client :heavy_check_mark:

> Basic project API :heavy_check_mark:

> Make a basic web deploy CI/CD :warning:

> Make the android builds :warning:

# Frontend Client

The frontend client is a react/ionic app consuming the API, deployed to web and mobile app.

## Intall project dependencies

    npm install

## Runnig project in devEnv

- Go to the project: cd .\frontend_client
- Run ionic serve to show app in browser
- Run ionic capacitor add to add a native iOS or Android project using Capacitor
- Generate your app icon and splash screens using cordova-res --skip-config --copy
- Explore the Ionic docs: https://ion.link/docs

# Frontend market manager

The frontend market is a react/ionic app consuming the API, deployed to web and mobile app.

## Intall project dependencies

    npm install

## Runnig project in devEnv

- Go to the project: cd .\frontend_market
- Run ionic serve to show app in browser
- Run ionic capacitor add to add a native iOS or Android project using Capacitor
- Generate your app icon and splash screens using cordova-res --skip-config --copy
- Explore the Ionic docs: https://ion.link/docs

## Capacitor

    npx cap add android
    npx cap add ios
    npx cap add electron
    
## Build

    npm run build


# BACKEND

The backend is a API make with Django and Django REST Framework

## Intall dependencies 

    cd backend
    python -m pipenv install

## Activate virtual env

    cd backend
    python -m pipenv shell

## Run project in dev env

    cd backend
    python manage.py runserver


## Run tests

    cd backend
    python manage.py test
