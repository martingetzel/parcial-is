import FraseAleatoria from './generador.js';

test('comprueba que la frase sea un string', () => {
    expect(typeof(FraseAleatoria())).toBe("string");
  });