import { Link } from 'react-router-dom'
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
                    className="NBA-icon">
                </img>
            </div>
            <div>
                <ul className="navList">
                    <li><Link to='/'>Inicio</Link></li>
                    <li><Link to='/category/shirt'>Remeras</Link></li>
                    <li><Link to='/category/cup'>Gorras</Link></li>
                </ul>
                
            </div>
            <CartWidget />
        </header>
    )
}
