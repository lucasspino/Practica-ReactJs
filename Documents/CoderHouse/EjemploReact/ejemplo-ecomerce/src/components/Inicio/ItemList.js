import React from "react";
import Item from "./Item";
import "./ItemList.css";


function ItemList({ products }) {
  return (
    <>
      {products.map((prod) => <Item key={prod.id} prod={prod} />)}
    </>
  )
}

export default ItemList



