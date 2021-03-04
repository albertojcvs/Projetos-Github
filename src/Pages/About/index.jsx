import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import './style.css';
function About() {
    return (
        <div className='about-page-container'>
            <Header />
            <section className='group-description'>
                <p className='description'> Projeto que pega os repositórios de um usuário do Github.</p>
                <p className='description'> Feito utilizando o React para o Frontend e o axios paraconsumir a API do Github.</p>
                <p className='description'>Desenvildo por Alberto José, estudante de Ciência da Computação na UFRPE.</p>
                <p className='description'> Link do projeto no Github: <a href="https://github.com/albertojcvs/Projetos-Github">link</a></p>
            </section>

            <Footer />
        </div>
    )
}



export default About