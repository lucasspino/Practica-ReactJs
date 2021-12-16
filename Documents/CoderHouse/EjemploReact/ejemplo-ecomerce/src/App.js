import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import ItemListContainer from "./components/Inicio/ItemListContainer";
import ItemDetailContainer from './components/Inicio/ItemDetailContainer';
import Cart from './components/NavBar/Cart';

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
          <Route
            exact
            path="/cart"
            element={<Cart/>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
