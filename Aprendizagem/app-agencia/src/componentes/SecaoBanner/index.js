import React from 'react';
import './style.css';

export default function Banner(props){
    return(
        <section className='banner'>
            <div className={props.modo ? 'light-fundo' : 'dark-fundo'}>
                <img src="./assets/banner.png" alt="Banner" />
            </div>
             <div className="conteudo-banner">
                 <p>BRANDING / UI / UX / TECNOLOGIA</p>
                 <h2>Agência de Branding</h2>
                 <span>e design digital</span>
             </div>
        </section>
    );
};