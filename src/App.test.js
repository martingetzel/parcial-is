import { render, fireEvent } from '@testing-library/react';
import App from './App';


test('comprueba que el nombre inicial sea "internauta"', () =>{
  const pantalla = render(<App />);
  const nombre = pantalla.getByLabelText("Nombre:");
  expect(nombre.value).toBe("internauta");
})

test('comprueba que el nombre cambie correctamente', () =>{
  const pantalla = render(<App />);
  const nombre = pantalla.getByLabelText("Nombre:");
  fireEvent.change(nombre, {target: {value: "Martín" }})
  expect(nombre.value).toBe("Martín");
})