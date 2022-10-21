import React from 'react';
import './style.css';
import Card from '../Card';

export default function ExpTrabalho(props){
    return(
        <section className={props.modo ? 'light-exp' : 'dark-exp'}>
            <div className='exp-topo'>
                <h2 className={props.modo ? 'light-titulo' : 'dark-titulo'}>Experiências De Trabalho</h2>

                <p className={props.modo ? 'light-paragrafo' : 'dark-paragrafo'}>Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
                          Sites e Marketing Digital, nos empenhamos diariamente para entregar
                          resultados que tragam impacto aos nossos clientes.</p>
            </div>
            <div className='cartao'>
                <Card 
                data = "JUNHO 2012 - 2016"
                titulo = "Web Designer"
                empresa = "Pied Piper StartUp."
                paragrafo = "Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"
                modo = {props.modo}
                />
                    
                <Card
                data = "AGOSTO 2016 - 2019"
                titulo = "Product Designer"
                empresa = "E Corp."
                paragrafo = "Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra"
                modo = {props.modo}
                 />

                <Card
                data = "FEVEREIRO 2019 - 2021"
                titulo = "Digital Consulting"
                empresa = "Arasaka Inc."
                paragrafo = "Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução"  
                modo = {props.modo}              
                />

            </div>
        </section>

    );
};