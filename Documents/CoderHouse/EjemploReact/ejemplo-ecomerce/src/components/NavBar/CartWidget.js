import React from "react";
import "./CartWidget.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useCartContext } from '../Context/CartContext'

export const CartWidget = () => {

    const { cartList, addQuantity } = useCartContext()

    return (
        <Link to="/cart" className="cartIcon">
            <div className="cartIcon">
                <FontAwesomeIcon icon={faCartPlus} className="FontAwesomeIcon" />
                {cartList.length > 0
                    ? <div className='incon-circle'>{addQuantity()}</div>
                    : ""}
            </div>
        </Link>
    )
}
