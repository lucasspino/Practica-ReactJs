import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import './ItemDetailContainer.css'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import Loader from './Loader'

function ItemDetailContainer() {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true);
    const { id } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const queryDb = doc(db, 'items', id)
        getDoc(queryDb)
            .then(ans => setItem({ id: ans.id, ...ans.data() }))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

    }, [id])

    return (
        <div>
            <h2>Detalle de tu producto</h2>
            {loading ? <Loader /> : <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer