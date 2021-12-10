import React from "react";

function Item ({prod}){
    return(
        <div key={prod.id}>
                    <div>
                        <h3>{prod.title}</h3>
                        <img src={prod.image} alt={prod.title} className="CamisetaProducto"></img>
                        <span>Precio: {prod.price}</span>
                    </div>
                </div>
    )
}

export default Item