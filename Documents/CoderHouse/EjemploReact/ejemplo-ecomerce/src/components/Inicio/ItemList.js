import { useState, useEffect } from "react";
import { getFetch } from "./getFetch";
import "./ItemList.css";


    function ItemList (){

        const [productos, setProductos] = useState([]);
        const [loading, setLoading] = useState(true);

        useEffect(()=>{

            getFetch
            .then(respuesta =>setProductos(respuesta))
            .catch(error => console.log(error))
            .finally(()=>setLoading(false))

        },[])

        return(
            <div>
                { loading ?
                <h2>Cargando...</h2>
            :
            productos.map((prod) => 
                <div key={prod.id}>
                    <div>
                        <h3>{prod.title}</h3>
                        <img src={prod.image} alt={prod.title} className="CamisetaProducto"></img>
                        <span>Precio: {prod.price}</span>
                    </div>
                </div>
            )}
            </div>
        )
    }

    export default ItemList