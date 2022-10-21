import React from 'react';
import './style.css';

export default function Card(props){
    return(
        <section className={props.modo ? 'light-card' : 'dark-card'}>
            <div className="card-conteudo">
                <p className={props.modo ? 'light-paragrafo' : 'dark-paragrafo'}>{props.data}</p>
                <h3 className={props.modo ? 'light-titulo' : 'dark-titulo'}>{props.titulo}</h3>
                <p className={props.modo ? 'light-paragrafo' : 'dark-paragrafo'}>{props.empresa}</p>
                <p className={props.modo ? 'light-paragrafo' : 'dark-paragrafo'}>{props.paragrafo}</p>
            </div>
        </section>
    );
};
