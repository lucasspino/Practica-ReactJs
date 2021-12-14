import React from 'react';
import ItemCount from './ItemCount'

function ItemDetail({item}) {
  
    
    return (
        <div className='divDetail' key={item.id}>
            <p> Producto: {item.title}</p>
            <p> Descripcion: {item.descripcion}</p>
            <p>
                 <img className='CamisetaProducto' src={item.image} alt={item.title} />
            </p>
            <p>precio: ${item.price}</p>
             <p> <ItemCount/>
            </p>
           
        </div>
    )
}

export default ItemDetail