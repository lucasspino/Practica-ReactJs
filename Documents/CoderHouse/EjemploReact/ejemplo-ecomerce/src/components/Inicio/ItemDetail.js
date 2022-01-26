import React from 'react';
import ItemCount from './ItemCount'
import './ItemDetail.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../Context/CartContext';


function ItemDetail({ item }) {

    const [goCart, setGoCart] = useState(true);

    const {addDuplicated } = useCartContext()

    const onAdd = (quantityToAdd) => {
        addDuplicated({ ...item, quantity: quantityToAdd })
        setGoCart(false);

    }

    return (
        <div className='divDetail' key={item.id}>
            <div className='cardDetail'>
                <div className='imgDetail'>
                    <img className='productImage' src={item.image} alt={item.title} />
                </div>
                <div className='detail'>
                    <p> Producto: {item.title}</p>
                    <p> Descripcion: {item.descripcion}</p>
                    <p>precio: ${item.price}</p>
                    {goCart
                        ? (<ItemCount stock={item.stock} onAdd={onAdd} />)
                        : (<Link to='/cart'><button>Ir al Carrito</button></Link>)
                    }
                    <p><Link to="/">Continuar comprando</Link></p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail