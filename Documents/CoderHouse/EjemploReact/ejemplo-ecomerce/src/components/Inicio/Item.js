import React from "react";
import { Link } from 'react-router-dom'


function Item({ prod }) {
    return (
        <div key={prod.id}>
            <div className="card">
                <h3 className="title">{prod.title}</h3>
                <img src={prod.image} alt={prod.title} className="productImage"></img>
                <span>Precio: {prod.price}</span>
                <button><Link className="detailSubtitle" to={`/detail/${prod.id}`}>Detalle</Link></button>
            </div>
        </div>
    )
}

export default Item