import { createContext, useState, useContext } from "react";

const CartContext = createContext([])

export const useCartContext = ()=> useContext(CartContext)

function CartContextProvider({ children }){

    const [cartList, setCartList]= useState([])
    function deleteCart (){
        setCartList([])
    }

    function addDuplicated(item){
        const index = cartList.findIndex(i=> i.id === item.id)
        if (index > -1){
            const itemCart = cartList[index].cantidad
            cartList.splice(index, 1)
            setCartList([...cartList,{...item, cantidad: item.cantidad + itemCart}])
        }else{
            setCartList([...cartList, item])
        }
    }

    return(
        <CartContext.Provider value={{
            cartList, 
            addDuplicated,
            deleteCart 
            }}>
            {children}

        </CartContext.Provider>
    )
}

export default CartContextProvider