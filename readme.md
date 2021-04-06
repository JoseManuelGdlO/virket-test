Buen dia dejo el proceso para ejecutar la aplicacion.-

como primer paso es necesario instalar las librerias apra poder trabajar con nuestro aplicativo 

Instalacion de NODE ---> https://nodejs.org/es/download/

Instalacion de angular CLI ---> npm install -g @angular/cli

Instalacion de Framework IONIC ---> npm install -g @ionic/cli

Instalacion de cordova --> npm install -g cordova

Instalacion de capacitor ---> npm install @capacitor/core @capacitor/cli

Instalacion de STORYBOOK --> npm i storybook

[no mandatorio]
Instalacion de Yarn ---> npm install --global yarn

Instalacion de Cordova-resurces ---> npm install -g cordova-res

Para incializar el proyecto es necesario instalar las dependencias del proyecto para eso es necesario usar 

"yarn install" o "npm install"

una ves terminada la instalacion ya podemos ejecutar nuestro proyecto

En el archivo llamado package.json tiene los comandos especificos para ejecutar lo que se desee hacer 
cabe mencionar deje creados 4 ambientes .- Desarrollo, Calidad, Stagin y Produccion, dejo en la parte de abajo 
los comandos y las descripciones de cada 1

Dato.- Para ejecutar cada una de estas opciones podemos ejecutarlas ya sea usando el prefijo "npm run" o "yarn" 

start ---> Ejecutar nuestro ptoyecto en local
start:qa --> Ejecutar nuestro ptoyecto en local con el ambiente de Calidad
start:sta --> Ejecutar nuestro ptoyecto en local con el ambiente de Stagin
start:prd --> Ejecutar nuestro ptoyecto en local con el ambiente de Produccion
build --> Compilar nuestro aplicativo
build:qa --> Compilar nuestro aplicativo con el ambiente de Calidad
build:sta --> Compilar nuestro aplicativo con el ambiente de Stagin
build:prd --> Compilar nuestro aplicativo con el ambiente de Produccion
platforms:ios --> Añadir la plataforma IOS
platforms:android --> Añadir plataforma Android
ios --> Sincronizar plugins nuevos con el proyecto IOS
android --> Sincronizar plugins nuevos con el proyecto Android

Adicional cree un pequeño proyecto donde se pueden vizualizar los componentes (Storybook) y sus diferentes escenarios

docs:json --> primer comando a ejecutar para que storybook pueda inicializarse
storybook --> Ejecutar nuestro proyecto en local
