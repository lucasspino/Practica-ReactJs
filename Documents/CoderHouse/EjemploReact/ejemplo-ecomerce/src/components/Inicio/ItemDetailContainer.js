import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
// import {getFetch} from './getFetch'
import ItemDetail from './ItemDetail'
import './ItemDetailContainer.css'

import {doc, getDoc, getFirestore} from 'firebase/firestore'

function ItemDetailContainer() {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true);

    const {id} = useParams()

    useEffect(()=>{
        const db= getFirestore()
        const queryDb = doc(db, 'items', id)
        getDoc(queryDb)
        .then(resp=>setItem({id: resp.id, ...resp.data()}))
        .catch(err=>console.log(err))
        .finally(()=>setLoading(false))
        // getFetch
        // .then(resp =>setItem(resp.find((item)=>item.id===parseInt(id))))
        // .catch(err =>console.log(err))
        // .finally(()=>setLoading(false))
        
    },[id])


    return (
        <div>
            <h2>Detalle de tu producto</h2>
            { loading ? <h3>En espera de ItemDetail...</h3> :  <ItemDetail item={item}/>}
        </div>
    )
}

export default ItemDetailContainer