import React from 'react';
import './App.css';
import MainButton from './MainButton';
import './Assets/inicio.js';
import './App.css'
import Title from './Assets/title.js';
import Inicio from './Assets/inicio.js';
import Indice from './Assets/indice.js'

function App() {
   
  return (
    <div className="App">
      <header className="App-header">
        <MainButton />
        <Title />
        <Inicio />
        <Indice />
      </header>
    </div>
    
  );
  
}


export default App;
