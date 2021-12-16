import React, {useState} from "react";
import "./ItemCount.css"

// export default function ItemCount (props){

//     const inicial = 1;
//     const max = 12;

//     const [contador, setContador] = useState (inicial);
    
//     const sumar = () => {
//         if (contador < max){
//             setContador(contador +1);
//         }  
//     }

//     const restar = () => {
//         if (contador > inicial){
//             setContador(contador -1);
//         }  
//     }

//     const addToCart = () => console.log(contador);
    
//     return(
//         <div className='ItemCountDiv'>
//             {/* <h3>Contador</h3> */}
//             <h3>{contador}</h3> 
//             <div>
//                 <button onClick={sumar}>+</button>
//                 <button onClick={restar}>-</button>
//                 <button onClick={addToCart}>Agregar al Carrito</button>
//             </div>
//         </div>
//     );
// }

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