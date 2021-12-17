import React from 'react';
import ItemCount from './ItemCount'
import './ItemDetail.css'
import { useState, useContext } from 'react'
import {Link} from 'react-router-dom'
import { CartContext } from '../Context/CartContext';

function ItemDetail({item}) {
    
    const [goCart, setGoCart] = useState(true);

    const {cartList, addToCart}= useContext(CartContext)

    const onAdd =(quantityToAdd)=>{
        console.log(quantityToAdd);
        addToCart({...item, cantidad:quantityToAdd})
        setGoCart(false);
        console.log(cartList)
    }

    return (
        <div className='divDetail' key={item.id}>
            <div className='cardDetail'>
                <div className='imgDetail'>
                    <img className='CamisetaProducto' src={item.image} alt={item.title} />
                </div>
                <div className='detail'>
                    <p> Producto: {item.title}</p>
                    <p> Descripcion: {item.descripcion}</p>
                    <p>precio: ${item.price}</p>
                    {goCart  
                    ? (<ItemCount stock={item.stock} onAdd={onAdd}/>) 
                    : (<Link to='/cart'><button>Ir al Carrito</button></Link>)
                    }
                    
                </div>
            </div>
        </div>
    )
} 

export default ItemDetail