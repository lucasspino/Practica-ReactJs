import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import ItemListContainer from "./components/Inicio/ItemListContainer";
import ItemDetailContainer from './components/Inicio/ItemDetailContainer';

function App() {
  return (
    <>
    < NavBar />
    <ItemListContainer Anniversary="NBA 75 Anniversary"/>
    <ItemDetailContainer/>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </>
  );
}

export default App;
