# Descargar proyecto

Descargar el proyecto y clonarlo por https o ssh

Si se descarga por https hacer git clone  https://github.com/davidg327/SolarSystem.git en el lugar que se desea descargar
Si se descarga por ssh hacer git clone  git@github.com:davidg327/SolarSystem.git en el lugar que se desea descargar

Una vez descargado instalar los node modules con npm
Ejecutar npm install si se quiere probar en ios hacer cd ios && pod install

Una vez ya instalado los node modules, ejecutar npm start para abrir metro y hay si quiere abrir por android colocar la
a y por ios la letra i.

Para compilar el proyecto en android como apk 
cd android && ./gradlew clean && ./gradlew assembleRelase


Uso de arquitectura modular y la metodología del modelo atómico, con el fin de dejar componentes
reutilizables.

Uso de Asynstorage para guardar en el storage los planetas favoritos.

Uso de Zustand para el manejo de estados globales.

Uso de axios para la peticiones

Para mostrar los planetas se hizo uso de esta api
https://api.le-systeme-solaire.net/swagger/#
