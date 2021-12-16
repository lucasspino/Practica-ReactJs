import React from "react";
import "./CartWidget.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'


export const CartWidget = () => {
    return (
        <Link to="/cart" className="cartIcon">
            <div className="cartIcon">
            <FontAwesomeIcon icon={faCartPlus} className="FontAwesomeIcon"/>
            </div>
        </Link>
    )
}
