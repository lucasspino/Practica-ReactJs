import React, { useState } from "react";
import "./ItemCount.css"


const ItemCount = ({ stock, onAdd }) => {

    const [count, setCount] = useState(1);

    const add = () => {
        count !== stock && setCount(count + 1);
    }
    const substract = () => {
        count !== 0 && setCount(count - 1)
    }

    return (
        <div className='ItemCountDiv'>
            <h3>{count}</h3>
            <div>
                <button onClick={add}>+</button>
                <button onClick={substract}>-</button>
                <button disabled={count === 0} onClick={() => onAdd(count)}>Agregar al Carrito</button>
            </div>
        </div>
    )
};

export default ItemCount