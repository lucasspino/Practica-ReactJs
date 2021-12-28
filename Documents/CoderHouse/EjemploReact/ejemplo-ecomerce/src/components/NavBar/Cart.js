import { useCartContext } from "../Context/CartContext"
import {Link} from 'react-router-dom'

function Cart(){

    const {cartList, deleteCart, deletedItem, addQuantity, addPrice} = useCartContext()

    return (
        <div>
            <h1>Tu carrito de compras</h1>
            { cartList.map(producto=> (<div><li key={producto.id}><h3>{producto.title}</h3><h3>Cantidad: {producto.cantidad}</h3><h3>Precio de tu item: U$D{producto.price * producto.cantidad}</h3><button onClick={()=>deletedItem(producto.id)}>Eliminar Producto</button></li></div>)) }
            {/* <button onClick={deleteCart}>Borrar</button> */}

            {cartList.length === 0 ? <><p>El carrito se encuentra vacio <Link to="/">Continuar comprando</Link></p></>
                                 : <div><p>Cantidad total de productos: {addQuantity()}</p> 
                                        <p> Precio total: ${addPrice()}</p>
                                        <button onClick={deleteCart}>Borrar</button>
                                    </div>}

        </div>
    )
} 

export default Cart
