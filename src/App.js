import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { FraseElegida } from './generador.js';
import Secreto from './nuevafeature.js';


function App() {
  
  const [nombre,setNombre] = useState('internauta');

  return (
    <div className="App cambiable">
      <header className="App-header">
        <img src={logo} className="App-logo cambiable" alt="logo" />
        
        <div>
          <label id='nombre-label' style={{fontSize: 15}}>Nombre:</label>
          <input
            aria-labelledby='nombre-label'
            type='string'
            value={nombre}
            style={{marginLeft: 10, fontSize: 15, width: 90, textAlign: 'center'}}
            onChange={event => setNombre(event.target.value)}
          />
          
          <div className='frase cambiable' id='frase'>
            Queridx {nombre}:
            <div>
              <FraseElegida />.
            </div>
          </div>            
        </div>
      </header>
      <footer>
        <div class="boton">
            Modo curioso
            <br/>
            <label class="switch">
              <input type="checkbox" onClick={event => Secreto()}/>
              <span class="slider round"></span>
            </label>
          </div>
      </footer>
    </div>
  );
}


export default App;
