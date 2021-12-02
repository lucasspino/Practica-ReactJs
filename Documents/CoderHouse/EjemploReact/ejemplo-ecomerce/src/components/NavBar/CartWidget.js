import React from "react";
import "./CartWidget.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'


export const CartWidget = () => {
    return (
        <div className="cartIcon">
            <FontAwesomeIcon icon={faCartPlus}/>
        </div>
    )
}
