# Apuntes

## Instalar Eslint en el equipo
* $ npm install -g eslint

## Descargar eslint a VsCode
* busca eslint en la parte de los plugins y click en [install]

## Crear archivo .eslintrc y agregarle el codigo estandar de este repo
* https://github.com/standard/eslint-config-standard/blob/master/eslintrc.json

## Instalar Prettier
* busca prettier en la parte de los plugins y click en [install]

## Instalar Prettier en el equipo
* $ npm install -g prettier

## Dar formato al nuestro archivo con prettier
* $ prettier --write archivo.js

## Instalar Jasmine
* $ npm install --save-dev jasmine

## Inicializar proyecto con Jasmine
* $ npx jasmine init

## Agregar scripts de ejecucion de Jasmine en package.json
* "scripts": { "test": "jasmine" }

## Iniciar las pruebas
* $ npm test

## Estructura basica de una prueba
* describe('Descripción de lo que hara la prueba', => {
    expect(funcionParaProbar('valor enviado')).toBe('valor esperado');})

## Ciclos de vida de una prueba unitaria con Jasmine
* beforeAll();
* beforeEach();
* afterAll();
* afterEach();

## Set de pruebas en Jasmine
* expect(x).toEqual(y) verifica si ambos valores son iguales.
* expect(x).toBe(y) verifica si ambos objetos son iguales.
* expect(x).toMatch(pattern) verifica si el valor pertenece al patrón establecido.
* expect(x).toBeDefined() verifica si el valor está definido.
* expect(x).toBeUndefined() verifica si el valor es indefinido.
* expect(x).toBeNull() verifica si el valor es nulo.
* expect(x).toBeTruthy() verifica si el valor es verdadero.
* expect(x).toBeFalsy(); verifica si el valor es falso.
* expect(x).toContain(y) verifica si el valor actual contiene el esperado.
* expect(x).toBeLessThan(y) verifica si el valor actual es menor que el esperado.
* expect(x).toBeGreaterThan(y) verifica si el valor actual es mayor que el esperado.