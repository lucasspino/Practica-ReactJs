import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import ItemListContainer from "./components/Inicio/ItemListContainer";
import ItemDetailContainer from './components/Inicio/ItemDetailContainer';
import Cart from './components/NavBar/Cart';
import CartContextProvider from './components/Context/CartContext';
import FormCart from './components/FormCart/FormCart';
import Error404 from './components/Error404/Error404';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div>
          <NavBar />
          <Routes>
            <Route
              exact
              path="/"
              element={<ItemListContainer Products="NBA Productos" />}
            />
            <Route
              exact
              path="/category/:idCate"
              element={<ItemListContainer Products="Productos" />}
            />
            <Route
              exact
              path="/detail/:id"
              element={<ItemDetailContainer />}
            />
            <Route
              exact
              path="/cart"
              element={<Cart />}
            />
            <Route
              exact
              path="/FormCart"
              element={<FormCart />}
            />
            <Route
              path="*"
              element={<Error404 />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
