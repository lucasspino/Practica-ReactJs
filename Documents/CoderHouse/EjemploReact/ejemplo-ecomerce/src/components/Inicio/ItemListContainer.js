import React from "react";
import { useParams } from "react-router-dom";
// import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import "./ItemListContainer.css";
import { getFetch } from "./getFetch";
import { useState, useEffect } from "react";


function ItemListContainer({Camisetas}) {

        const [productos, setProductos] = useState([]);
        const [loading, setLoading] = useState(true);

        const {idCate} = useParams()

        useEffect(()=>{

            if (idCate) {
                getFetch
                .then(respuesta =>setProductos(respuesta.filter(prod => prod.categorie === idCate)))
                .catch(error => console.log(error))
                .finally(()=>setLoading(false))
            } else {
                getFetch
                .then(respuesta =>setProductos(respuesta))
                .catch(error => console.log(error))
                .finally(()=>setLoading(false))
            }
           
        },[idCate])
        
    return (
        <div className="contenedorInicio">
            <h1> {Camisetas} </h1>
            {/* <ItemCount/> */}
            <div className="divProductosCamisetas"> 
                { loading ? <h2>Cargando...</h2> : <ItemList productos={productos}/> }
            </div>
        </div>
    )
}

export default ItemListContainer;