import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import ItemListContainer from "./components/Inicio/ItemListContainer";
import ItemDetailContainer from './components/Inicio/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar/>
        <Routes>
        <Route
            exact
            path="/"
            element={<ItemListContainer Camisetas="Camisetas"/>}
          />
          <Route
            exact
            path="/categoria/:idCate"
            element={<ItemListContainer Camisetas="Camisetas"/>}
          />
          <Route
            exact
            path="/detalle/:id"
            element={<ItemDetailContainer/>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
