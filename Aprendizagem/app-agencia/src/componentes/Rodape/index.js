import React from 'react';
import './style.css';

export default function Rodape(props){
    return(
        <footer className={props.modo ? 'light-rodape' : 'dark-rodape'}>
            <img src="./assets/logo.png" alt="Logo" />
            <p>
                 Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
                        ferramentas e tecnologias personalizadas.
            </p>

            <div className="redes">
                <img src="./assets/facebook.png" alt="Facebook" />
                <img src="./assets/twitter.png" alt="Twitter" />
                <img src="./assets/linkedin.png" alt="Linkedin" />
                <img src="./assets/dribble.png" alt="Drible" />
                <img src="./assets/behance.png" alt="Behance" />
                <img src="./assets/google-plus.png" alt="GooglePlus" />
            </div>

             <p className={props.modo ? 'light-copy' : 'dark-copy'}>Copyright 2022 <span>Rafael Okida</span></p>
        </footer>
    );
};