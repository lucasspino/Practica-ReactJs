import React from 'react'
// import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {getFetch} from './getFetch'
import ItemDetail from './ItemDetail'
import './ItemDetailContainer.css'


function ItemDetailContainer() {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true);

    

    useEffect(()=>{
        
        getFetch
        .then(respuesta =>setItem(respuesta.find((item) => item.id === 1)))
        .catch(error => console.log(error))
        .finally(()=>setLoading(false))

    },[])


    return (
        <div>
            <h2>Detalle de tu producto</h2>
            { loading ? <h3>En espera de ItemDetail...</h3> :  <ItemDetail item={item}/>}
        </div>
    )
}

export default ItemDetailContainer