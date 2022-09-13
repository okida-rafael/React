import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import './style.css';


export default function Sabores(){
    return(
        <div>   
            <Header></Header>
                <main>
                    <section className="sabores-banner">
                        <h1>Nossos Sabores</h1>
                    </section>
                    <section className="sabores-container">
                        <h2>Sabores De Sorvete</h2>
                        <div className="sabores-card-container">
                            <div className="sabores-card-content">
                                <img src="/assets/sabor-oreo.png" alt="Sorvete de oreo" />
                                <h3>Sorvete de oreo</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                            <div className="sabores-card-content">
                                <img src="/assets/sabor-pistache.png" alt="Sorvete Pistache" />
                                <h3>Sorvete Pistache</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                            <div className="sabores-card-content">
                                <img src="/assets/sabor-cookies-avela.png" alt="Sorvete Cookies & Avelã" />
                                <h3>Sorvete Cookies & Avelã</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                            <div className="sabores-card-content">
                                <img src="/assets/sorbet-kiwi.png" alt="Sorvete de Kiwi" />
                                <h3>Sorvete de Kiwi</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                            <div className="sabores-card-content">
                                <img src="/assets/sorbet-morango.png" alt="Sorvete de Morango" />
                                <h3>Sorvete de Morango</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                            <div className="sabores-card-content">
                                <img src="/assets/sorbet-limao.png" alt="Sorvete de Limão Siciliano" />
                                <h3>Sorvete de Limão Siciliano</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </section>
                </main>

            <Footer></Footer>
        </div>
    )
};