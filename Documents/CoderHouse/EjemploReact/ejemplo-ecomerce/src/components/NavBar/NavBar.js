import React from 'react'
import NBA from '../images/NBALogo.png';
import "./NavBar.css";
import { CartWidget } from './CartWidget';


export const NavBar = () => {
    return (
        <header className="header">
            <div>
                <img
                    src={NBA}
                    alt="Logo-NBA"
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
           <CartWidget/>
        </header>
    )
}
