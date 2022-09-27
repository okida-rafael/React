import React from 'react';
import './main.css';
import Horario from './horario';

function Main(props){

    let data = new Date(props.teste);
    let recebeDados = Horario(data);
    return(
        <div className='sec-main'>
            <h1>Teste de saudação por horário</h1>
            <p>Oi, hoje é dia <span>{recebeDados.dia}</span> de <span>{recebeDados.mes}</span> </p>
            <span>{recebeDados.saudacao}</span>
        </div>
    );
};

export default Main;