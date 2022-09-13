import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <header>
            <div className='limitar-secao'>
                <img src="./assets/logo.png" alt="Logo" />
                <nav>
                    
                    <Link to='/'>Home</Link>              
                    <Link to='/sabores'>Sabores</Link>              
                    <Link to='/sobre'>Sobre</Link>              
                                  
                </nav>
            </div>
        </header>

    )
};