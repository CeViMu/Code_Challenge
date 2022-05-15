# Documentación del Code Challenge
Weekly Mission 4

## Dependencias usadas
- Jest: Nos ayuda a escribir y ejecutar tests

¿Como instalarlo?

1) Inicializamos npm
> npm init

2) Instalamos jest
> npm install --save -dev jest

3) Modificamos el archivo package.json en la linea de "test" pues en windows 10 hay que cambiar la dirección para que pueda funcionar jest.
![image](https://github.com/CeViMu/Code_Challenge/blob/main/images/Imagen3.png)

Documentación de jest: https://jestjs.io/docs/api


- Express: Ayuda a crear un servidor para nuestra API
¿Cómo instalarlo?

1) Instalamos express
> npm install express --save

Documentación de express: https://expressjs.com/es/

- ESLinter: Herramienta de código abierto, que nos ayuda a limpiar nuestro código.
¿Cómo instalarlo?

1) Hacemos la instalación
> npm install eslint --save-dev

2) Configuramos linter
> npm init @eslint/config

El archivo .en que se crea debe tener la siguiente configuración
```js
module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "jest": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
        indent: ["error", 4],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        semi: ["error", "always"]
    }
};
```
3) Automatizamos los comandos de eslint en el package.json
![image](https://github.com/CeViMu/Code_Challenge/blob/main/images/Imagen4.png)

## Agregando pruebas automatizadas
1) Creamos un arhivo .github/workflows/test.yml y copiamos el siguiente contenido

```
name: Run Tests in my project every push on GitHub

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v1
    - name: Run Jest
      uses: stefanoeb/jest-action@1.0.3
```
2) Hacemos commit de este archivo y lo agregamos al repositorio.



