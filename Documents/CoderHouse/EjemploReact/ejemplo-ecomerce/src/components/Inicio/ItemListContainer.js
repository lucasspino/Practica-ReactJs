import React from "react";
import ItemCount from "./ItemCount";
import "./ItemListContainer.css";




export const ItemListContainer = (props) => {
    return (
        <div className="contenedorInicio">
            <h1> {props.ItemListContainer} </h1>
            <hr/>
            <ItemCount/>
        </div>
    )
}

