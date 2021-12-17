import React, {useState} from "react";
import "./ItemCount.css"


const ItemCount = ({stock, onAdd})=>{

    const [contador, setContador] = useState(1);

    const sumar = ()=>{
        contador !== stock && setContador(contador + 1);
    }
    const restar = ()=>{
        contador !== 0 && setContador(contador - 1)
    }

    return(
        <div className='ItemCountDiv'>
            {/* <h3>Contador</h3> */}
            <h3>{contador}</h3> 
            <div>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <button disabled={contador === 0} onClick={()=> onAdd(contador)}>Agregar al Carrito</button>
            </div>
        </div>
    )
};

export default ItemCount