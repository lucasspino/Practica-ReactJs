import React from 'react';
import ItemCount from './ItemCount'
import './ItemDetail.css'

function ItemDetail({item}) {
  
    
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
                    <p> <ItemCount/> </p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail