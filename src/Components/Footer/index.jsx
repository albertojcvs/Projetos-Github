import React from 'react';
import { FiGithub } from 'react-icons/fi';
import './style.css'
function Footer() {
    return (
        <footer className='footer-container'>
            <p>
                Desenvolvido  por Alberto José
          </p>
            <p>
                <FiGithub size='20' color='#005D6A' /> Github: <a target='_blank' href="https://github.com/albertojcvs">albertojcvs</a>
            </p>
        </footer>
    );


}

export default Footer;