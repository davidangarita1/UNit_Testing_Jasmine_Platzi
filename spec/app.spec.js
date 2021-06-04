const saludar = require('../app')

// Boolean, string, number : ToBe o ToEqual
var x = true;

// Object : ToEqual
var a = {};
var b = {};

describe('verificar que la variable es true', () => {
    it('La función saluda', () => {
        expect(saludar('Platzi')).toContain('Hola');
    });

    it('X es true', () => {
        expect(x).toBe(true);
        expect(x).toEqual(true);
    });

    it('objetos iguales', () => {
        expect(a).toEqual(b);
    });
});
