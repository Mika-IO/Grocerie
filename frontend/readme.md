# Frontend

The frontend is a react/ionic app consuming the api in fastAPI, deployed in AWS S3 and in mobile app.

## Intall project dependencies

    npm install
## Runnig project

- Go to the project: cd .\kitanda
- Run ionic serve within the app directory to see your app in the browser
- Run ionic capacitor add to add a native iOS or Android project using Capacitor
- Generate your app icon and splash screens using cordova-res --skip-config --copy
- Explore the Ionic docs for components, tutorials, and more: https://ion.link/docs

## Tests

## Capacitor

    npx cap add android
    npx cap add ios
    npx cap add electron
## Build

    npm run build
