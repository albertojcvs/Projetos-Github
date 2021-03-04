import React from 'react';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import ProjectList from '../../Components/ProjectList';

import { FiSearch } from 'react-icons/fi';

import './style.css';

function Home() {
    return (
        <div className='home-page-container'>
            <Header />

            <main className='main-container'>
                <div className='search-group'>
                    <Input className='search-input' type='text' name='user' placeHolder='Digite um usuário do Github' />
                    <Button className='search-button'><FiSearch /></Button>
                </div>

                <ProjectList />
            </main>

            <Footer />
        </div>
    );
}



export default Home;