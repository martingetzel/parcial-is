import FraseElegida from './generador.js'

test('comprueba que la frase sea un string', () => {
    expect(typeof(FraseElegida())).toBe("string");
  });