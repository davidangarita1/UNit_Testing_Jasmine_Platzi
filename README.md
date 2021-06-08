# Apuntes de Unit Testing con Jasmine

## Instalar Eslint en el equipo
* Para verificar la sintaxis del codigo.
* `$ npm install -g eslint`

## Descargar eslint a VsCode
* busca eslint en la parte de los plugins y click en [install]

## Crear archivo .eslintrc y agregarle el codigo estandar de este repo
* https://github.com/standard/eslint-config-standard/blob/master/eslintrc.json

## Instalar Prettier
* busca prettier en la parte de los plugins y click en [install]

## Instalar Prettier en el equipo
`$ npm install -g prettier`

## Dar formato al nuestro archivo con prettier
`$ prettier --write archivo.js`

## Instalar Jasmine
`$ npm install --save-dev jasmine`

## Inicializar Jasmine con Node
`$ node ./node_modules/jasmine/bin/jasmine.js init`

## Agregar script en package.json para correr pruebas de server
```javascript
"test:server": "node ./node_modules/jasmine/bin/jasmine.js"
```

## Agregar linea en jasmine.json
`"../server/**/*[sS]pec.js",`

## Comando para correr pruebas en server
`$ npm run test:server`

## Instalar Jasmine-console-reporter
`$ npm i jasmine-console-reporter --save-dev`

## Agregar linea en scripts package.json
```javascript
"test:server:coverage": "node spec/specs.js",
```

## Instalar nyc
`$ npm install --save-dev nyc`

## Agregar linea en scrips package.json
```javascript
"test:server:coverage": "nyc node spec/specs.js",
```

## Agregar al package.json este objeto
```javascript
"nyc": {
    "report-dir": "./spec/istanbul/report",
    "temp-dir": "./spec/istanbul",
    "reporter": [ "text", "text-summary", "html" ],
    "exclude": [ "spec/**/", "server/.spec.js" ]
    }
```

## Inicializar proyecto con Jasmine
`$ npx jasmine init`

## Agregar scripts de ejecucion de Jasmine en package.json
```javascript
"scripts": { "test": "jasmine" }
```

## Iniciar las pruebas
`$ npm test`

## Estructura basica de una prueba
```javascript
describe('Descripción de lo que hara la prueba', => {
    expect(funcionParaProbar('valor enviado')).toBe('valor esperado');})
```
## Ciclos de vida de una prueba unitaria con Jasmine
* beforeAll(); // Antes de todo
* beforeEach(); // Antes de cada prueba
* afterAll(); // Despues de todo
* afterEach(); // Despues de cada prueba

## Set de pruebas en Jasmine
```javascript
expect(array).toContain(member); // verifica si el valor actual contiene el esperado.
expect(fn).toThrow(string);
expect(fn).toThrowError(string);
expect(instance).toBe(instance); // verifica si ambos objetos son iguales.
expect(mixed).toBeDefined(); // verifica si el valor está definido.
expect(mixed).toBeFalsy(); // verifica si el valor es falso.
expect(mixed).toBeNull(); // verifica si el valor es nulo.
expect(mixed).toBeTruthy(); // verifica si el valor es verdadero.
expect(mixed).toBeUndefined(); // verifica si el valor es indefinido.
expect(mixed).toEqual(mixed); // verifica si ambos valores son iguales.
expect(mixed).toMatch(pattern); // verifica si el valor pertenece al patrón establecido.
expect(number).toBeCloseTo(number, decimalPlaces);
expect(number).toBeGreaterThan(number); // verifica si el valor actual es mayor que el esperado.
expect(number).toBeLessThan(number); // verifica si el valor actual es menor que el esperado.
expect(number).toBeNaN(); // verifica si el valor no es un numero
expect(spy).toHaveBeenCalled(); // verifica si el metodo ha sido llamada
expect(spy).toHaveBeenCalledTimes(number); // verifica si el metodo ha sido llamado un numero de veces determinadas
expect(spy).toHaveBeenCalledWith(…arguments); // verifica si el metodo ha sido llamado con unos parametros determinados
```

## Instalar HandleBars
`$  npm i -D handlebars`

## SpyOn
* La separación de responsabilidades es una de las buenas prácticas que encontramos en un proyecto de software. Separar responsabilidades significa agrupar código de tal manera que cada conjunto se encargue de una tarea específica.

* Cuando probamos un componente, queremos probar las responsabilidades que le estamos delegando al componente y no todo el código ejecutado. Es decir, si el componente A utiliza la función b(), lo que queremos probar es la lógica propia del componente y no el código de la función.

* Si ejecutamos código que se encuentre fuera del domino de un componente, nos podemos encontrar con resultados inesperados. Es por ello, que jasmine cuenta con un sistema de espías (spyOn), cuyo objetivo principal es interceptar la ejecución de una función y simular su resultado.

### ¿Cómo se crea un espía (SpyOn)?
```javascript
spyOn(obj, 'method') // obj.method es una función
```

### ¿Cómo verificar que un método fue llamado?
```javascript
const ref = spyOn(obj, 'method');
expect(ref).toHaveBeenCalled();
// O directamente
expect(obj.method).toHaveBeenCalled()
```

### ¿Cómo verificar que un método fue llamado con un parámetro específico?
```javascript
const ref = spyOn(obj, 'method');
expect(ref).toHaveBeenCalledWith('foo', 'bar');
// O directamente
expect(obj.method).toHaveBeenCalledWith('foo', 'bar')
```

### ¿Cómo puedo verificar el número exacto de ejecuciones de un método?
```javascript
expect(obj.method.callCount).toBe(2)
```

### ¿Cómo espiar en un método sin modificar su comportamiento?
```javascript
spyOn(obj, 'method').andCallThrough()
```

### ¿Cómo puedo cambiar el valor retornado por un método?
```javascript
spyOn(obj, 'method').andReturn('value')
```

### ¿Cómo puedo sobreescribir un método?
```javascript
spyOn(obj, 'method').andCallFake(() => 'this is a function');
```