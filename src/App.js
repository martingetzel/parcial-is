import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import FraseAleatoria from './generador.js';

function App() {
  
  const [nombre,setNombre] = useState('internauta');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{fontSize: 15, fontWeight: "bold"}}>
          Ingresá tu nombre acá abajo: 
        </div>
        <div>
          <label id='nombre-label' style={{fontSize: 15}}>Nombre:</label>
          <input
            aria-labelledby='nombre-label'
            type='string'
            value={nombre}
            style={{marginLeft: 10, fontSize: 15, width: 90, textAlign: 'center'}}
            onChange={event => setNombre(event.target.value)}
          />
          
          <div className='frase' >
            Queridx {nombre}:
            <div>
              <FraseAleatoria />.
            </div>
          </div>

        </div>
      </header>
    </div>
  );
}

export default App;
