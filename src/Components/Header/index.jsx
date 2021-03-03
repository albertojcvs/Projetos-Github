import React from 'react';
import './style.css'
import Navbar from '../Navbar'
function Header(){
    return(
        <header className='header'>
            <h1 className = 'title'>Projetos do Github</h1>
            <Navbar />
        </header>
    );
}



export default Header;