import React from 'react'
import NBA from '../images/NBALogo.png';
import "./NavBar.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'

export const NavBar = () => {
    return (
        <header className="header">
            <div>
                <img
                    src={NBA}
                    className="NBA-logo">
                </img>
            </div>    
            <div>
                <ul className="ListaNav">
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Productos</a></li>
                    <li><a href="">Contacto</a></li>
                </ul>
            </div>
            <div className="cartIcon">
                <FontAwesomeIcon icon={faCartPlus}/>
            </div>
        </header>
    )
}
