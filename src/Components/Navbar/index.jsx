import React from 'react';
import './style.css'
import { Link } from 'react-router-dom'
function NavBar() {
    return (
        <nav className='navbar'>
            <ul className='link-list'>
                <li className= 'link'><Link to='/'>Início</Link></li>
                <li className= 'link'><Link to='about'>Sobre</Link></li>
            </ul>
        </nav>
    );
}



export default NavBar;