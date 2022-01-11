import React from 'react'
import {Link} from 'react-router-dom'
import {addDoc, collection, getFirestore, Timestamp} from 'firebase/firestore'
import { useState } from "react";
import { useCartContext } from "../Context/CartContext"

function FormCart() {
    const {cartList, deletedItem, addPrice} =useCartContext() 
    


    const [idOrder, setidOrder] = useState("")
    const [dataForm, setDataForm] = useState({
        name:"", phone:"", email:""
    })
 
    const handlerChange = (e)=>{
         // console.log(e.target.name)
         // console.log(e.target.value)
         setDataForm({...dataForm, 
                     [e.target.name]:e.target.value})
    }
     console.log(dataForm)
     //pasar esto a otro componente
 
     const generarOrden = (e)=>{
         e.preventDefault()

        let order= {}       
         order.date = Timestamp.fromDate(new Date())
         order.buyer= dataForm
         order.total = addPrice()
 
         order.items = cartList.map( cartItem =>{
             const id = cartItem.id;
             const nombre = cartItem.title;
             const precio = cartItem.price * cartItem.cantidad
 
             return {id, nombre, precio}
         })
         
 
         //Generar orden
 
         const db = getFirestore()
         const orderCollection = collection(db, 'orders')
         addDoc(orderCollection, order)
         .then(resp=>setidOrder(resp.id))
         .catch(err=> console.log(err))
         .finally(()=>{deletedItem()
             setDataForm({name:"", phone:"", email:""})}
                     )

         
            
    }
   
    return (
        <div>
            <h1>Formulario de compra</h1>
            
            <form className="form" onSubmit={generarOrden}
               onChange={handlerChange}>
              <input type="text" name="name" placeholder="Nombre"  value={dataForm.name} required /> <br />
              <input type="text" name="phone" placeholder="Telefono" value= {dataForm.phone} required /><br />
              <input type="email" name="email" placeholder="Ingrese su correo electronico" value={dataForm.email} required /><br />
              
              {cartList.length !== 0 
                  ? <><button>Generar orden</button> 
                    <Link to="/cart"><button>Volver al carrito</button></Link></>
                  : <button disabled>Generar orden</button> }
            </form>
               
            {idOrder.length !== 0 && <> <p>Compra finalizada. La orden es {idOrder}</p>
                                    <p><Link to="/"> Realizar otra  compra </Link></p> </>}
       
        </div>
    )
}

export default FormCart