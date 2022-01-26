import React from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import "./ItemListContainer.css";
import Loader from "./Loader";
import { useState, useEffect } from "react";
import { collection, getFirestore, getDocs, query, where } from 'firebase/firestore'


function ItemListContainer({ Products }) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { idCate } = useParams()

    useEffect(() => {
        if (idCate) {
            const db = getFirestore()

            const queryCollection = query(collection(db, 'items'), where('category', '==', idCate));
            getDocs(queryCollection)
                .then(ans => setProducts(ans.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))

        } else {
            const db = getFirestore()

            const queryCollection = collection(db, 'items',)
            getDocs(queryCollection)
                .then(ans => setProducts(ans.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
                .catch(error => console.log(error))
                .finally(() => setLoading(false))
        }
    }, [idCate])

    return (
        <div className="containerItemList">
            <h1> {Products} </h1>
            <div className="divProd">
                {loading ? <Loader /> : <ItemList products={products} />}
            </div>
        </div>
    )
}

export default ItemListContainer;