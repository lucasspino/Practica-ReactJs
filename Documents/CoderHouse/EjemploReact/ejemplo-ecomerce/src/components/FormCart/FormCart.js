import React from 'react'
import { Link } from 'react-router-dom'
import { addDoc, collection, getFirestore, Timestamp } from 'firebase/firestore'
import { useState } from "react";
import { useCartContext } from "../Context/CartContext"
import "./FormCart.css"

function FormCart() {

    const { cartList, deletedItem, addPrice, addQuantity } = useCartContext()
    const [idOrder, setIdOrder] = useState("")
    const [dataForm, setDataForm] = useState({
        name: "", phone: "", email: ""
    })

    const handlerChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }
    const generateOrder = (e) => {
        e.preventDefault()

        let order = {}
        order.date = Timestamp.fromDate(new Date())
        order.buyer = dataForm
        order.total = addPrice()
        order.totalQuantity = addQuantity()

        order.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const name = cartItem.title;
            const quantity = cartItem.quantity;
            const price = cartItem.price * cartItem.quantity

            return { id, name, price, quantity }
        })
        const db = getFirestore()
        const orderCollection = collection(db, 'orders')
        addDoc(orderCollection, order)
            .then(ans => setIdOrder(ans.id))
            .catch(err => console.log(err))
            .finally(() => {
                deletedItem()
                setDataForm({ name: "", phone: "", email: "" })
            }
            )
    }

    return (
        <div>
            <h1>Formulario de compra</h1>
            <form className="formContent" onSubmit={generateOrder}>
                <input type="text" name="name" placeholder="Nombre"  onChange={handlerChange} value={dataForm.name} required /> <br />
                <input type="text" name="phone" placeholder="Telefono"  onChange={handlerChange} value={dataForm.phone} required /><br />
                <input type="email" name="email" placeholder="Ingrese su correo electronico"  onChange={handlerChange} value={dataForm.email} required /><br />

                {cartList.length !== 0
                    ? <><button>Generar orden</button>
                        <Link to="/cart"><button>Volver al carrito</button></Link></>
                    : <button disabled>Generar orden</button>}
            </form>

            {idOrder.length !== 0 && <>
                <p>Compra finalizada. La orden es {idOrder}</p>
                <p><Link to="/"> Realizar otra  compra </Link></p>
            </>}

        </div>
    )
}

export default FormCart