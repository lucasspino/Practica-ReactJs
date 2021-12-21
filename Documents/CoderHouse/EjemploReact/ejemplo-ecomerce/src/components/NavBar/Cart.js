import { useCartContext } from "../Context/CartContext"

function Cart(){

    const {cartList, deleteCart} = useCartContext()

    return (
        <div>
            { cartList.map(producto=> (<li>{producto.title} {producto.cantidad}</li>)) }
            <button onClick={deleteCart}>Borrar</button>
        </div>
    )
} 

export default Cart
