import React from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import "./ItemListContainer.css";
import { getFetch } from "./getFetch";
import { useState, useEffect } from "react";


function ItemListContainer({Anniversary}) {

        const [productos, setProductos] = useState([]);
        const [loading, setLoading] = useState(true);

        useEffect(()=>{

            getFetch
            .then(respuesta =>setProductos(respuesta))
            .catch(error => console.log(error))
            .finally(()=>setLoading(false))

        },[])

    return (
        <div className="contenedorInicio">
            <h1> {Anniversary} </h1>
            <hr/>
            <ItemCount/>
            <div>
                { loading ? <h2>Cargando...</h2> : <ItemList productos={productos}/> }
            </div>
        </div>
    )
}

export default ItemListContainer;