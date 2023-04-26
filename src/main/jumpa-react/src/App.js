import React from 'react';
import './App.css';
import MainButton from './MainButton';
import Title from './Assets/title.js';
import Inicio from './Assets/inicio.js';
import Indice from './Assets/indice.js';


function App() {
  return (
    <>
    <Title />
    <Inicio />
    <Indice />
    <div className="App">
      <header className="App-header">
        <MainButton />
              </header>
    </div>
    </>
  );
}

export default App;
