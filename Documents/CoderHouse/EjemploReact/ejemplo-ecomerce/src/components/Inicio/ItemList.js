import React from "react";
import Item from "./Item";
import "./ItemList.css";


function ItemList ( { productos } ){
  return(
    <>
      { productos.map((prod) => <Item prod= {prod} />) }
    </>
  )
}

export default ItemList



    