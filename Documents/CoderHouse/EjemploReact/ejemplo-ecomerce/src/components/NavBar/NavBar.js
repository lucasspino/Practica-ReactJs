import {Link} from 'react-router-dom'
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
                    <li><Link to='/'>Inicio</Link></li>
                    <li><Link to='/categoria/camisetas'>Remeras</Link></li>
                    <li><Link to='/categoria/gorras'>Gorras</Link></li>
                </ul>
            </div>
           <CartWidget/>
        </header>
    )
}
