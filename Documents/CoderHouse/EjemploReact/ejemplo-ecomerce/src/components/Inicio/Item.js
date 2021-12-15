import React from "react";
import {Link} from 'react-router-dom'


function Item ({prod}){
    return(
        <div key={prod.id}>
            <div className="cardCamiseta">
                <h3 className="title">{prod.title}</h3>
                <img src={prod.image} alt={prod.title} className="CamisetaProducto"></img>
                <span>Precio: {prod.price}</span>
                <Link className="buttomDetalle" to={`/detalle/${prod.id}`}>Detalle</Link>
            </div>
        </div>
    )
}

export default Item