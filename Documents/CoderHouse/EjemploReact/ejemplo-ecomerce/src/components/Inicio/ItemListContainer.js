import React from "react";
import { useParams } from "react-router-dom";
// import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import "./ItemListContainer.css";
// import { getFetch } from "./getFetch";
import { useState, useEffect } from "react";
import {collection, doc, getDoc, getFirestore, getDocs, query, where} from 'firebase/firestore'


function ItemListContainer({Camisetas}) {

        const [productos, setProductos] = useState([]);
        // const [producto, setProducto] = useState({});
        const [loading, setLoading] = useState(true);

        const {idCate} = useParams()

        useEffect(()=>{
            if (idCate) {
              const db= getFirestore()

              const queryCollection = query(collection(db, 'items'), where('categorie', '==', idCate));
              getDocs(queryCollection)
              .then(resp => setProductos( resp.docs.map(prod => ({ id: prod.id, ...prod.data() }) ) ) )
              .catch(err=>console.log(err))
              .finally(()=>setLoading(false))

              }else {
                const db = getFirestore()
                const queryCollection = collection(db, 'items', )
                getDocs(queryCollection)
                .then(resp=> setProductos( resp.docs.map(prod =>({ id: prod.id, ...prod.data()}))))
                .catch(error => console.log(error))
                .finally(()=>setLoading(false))
           }},[idCate])
        console.log(productos)

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