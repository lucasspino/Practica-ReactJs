import { createContext, useState, useContext } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

function CartContextProvider({ children }) {

    const [cartList, setCartList] = useState([])

    function addDuplicated(item) {
        const index = cartList.findIndex(i => i.id === item.id)
        if (index > -1) {
            const itemCart = cartList[index].quantity
            cartList.splice(index, 1)
            setCartList([...cartList, { ...item, quantity: item.quantity + itemCart }])
        } else {
            setCartList([...cartList, item])
        }
    }

    function deleteCart() {
        setCartList([])
    }

    function deletedItem(id) {
        const cartNoItem = cartList.filter(itemDeleted => itemDeleted.id !== id)
        setCartList(cartNoItem)

    }

    function addQuantity() {
        const totalQuantity = cartList.map(prod => prod.quantity).reduce((a, b) => a + b)
        return (
            totalQuantity
        )

    }

    function addPrice() {
        const totalPrice = cartList.map(prod => prod.quantity * prod.price).reduce((a, b) => a + b)

        return (
            totalPrice
        )
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addDuplicated,
            deleteCart,
            deletedItem,
            addQuantity,
            addPrice
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider