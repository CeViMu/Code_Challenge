## Documentación del Code Challenge
Weekly Mission 4

# Dependencias usadas
- Jest: Nos ayuda a escribir y ejecutar tests
¿Como instalarlo?

1) Inicializamos npm
> npm init

2) Instalamos jest
> npm install --save -dev jest

3) Modificamos el archivo package.json en la linea de "test" pues en windows 10 hay que cambiar la dirección para que pueda funcionar jest.
![image] (https://github.com/CeViMu/Code_Challenge/blob/main/images/Imagen2.png)

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
El archivo .en que se crea debe tener la siguiente onfiguración
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




