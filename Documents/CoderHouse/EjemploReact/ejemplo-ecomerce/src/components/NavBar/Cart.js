import { useCartContext } from "../Context/CartContext"
import { Link } from 'react-router-dom'
import "./Cart.css"

function Cart() {

    const { cartList, deleteCart, deletedItem, addQuantity, addPrice } = useCartContext()

    return (
        <div>
            <h1>Tu carrito de compras</h1>
            <div className="cartCardContainer">
                {cartList.map(product => (
                    <div className="cartCard" key={product.id}>
                        <li>
                            <h3>{product.title}</h3><h3>Cantidad: {product.quantity}</h3>
                            <h3>Precio de tu item: U$D{product.price * product.quantity}</h3>
                            <button onClick={() => deletedItem(product.id)}>Eliminar Producto</button>
                        </li>
                    </div>))}
            </div>

            {cartList.length === 0

                ? <>
                    <p>El carrito se encuentra vacio <Link to="/">Continuar comprando</Link></p>
                </>
                : <div className="cartContainer">
                    <p>Cantidad total de productos: {addQuantity()}</p>
                    <p> Precio total: ${addPrice()}</p>
                    <div>
                        <button onClick={deleteCart}>Borrar</button>
                        <Link to="/FormCart"><button>Finalizar Compra</button></Link>
                    </div>
                </div>}
        </div>
    )
}

export default Cart
