import { FraseAleatoria } from './generador';

test('comprueba que la frase sea un string', () => {
    expect(typeof(FraseAleatoria())).toBe("string");
  });