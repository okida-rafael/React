import React from 'react';
import './style.css';
import modoLight from '../../moon.png';
import modoDark from '../../sun.png';

export default function Topo(props){

    return(
        <header className={props.modo ? 'light-mode' : 'dark-mode'}>
            <div className="item-topo">
                <img className='logo' src="./assets/logo.png" alt="Logo" />
            </div>
            <div className="item-topo">
                <button onClick={props.alteraModo} className={props.modo ? 'light-btn' : 'dark-btn'}>
                <img src={props.modo ? modoLight : modoDark}  alt="Tema" />
                </button>
            </div>
        </header>
    );
}