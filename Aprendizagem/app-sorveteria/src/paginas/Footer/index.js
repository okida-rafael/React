import React from "react";
import './style.css'


export default function Footer(){
    return(
        <footer>
            <div className="limitar-secao footer-container">
                <img src="/assets/logo.png" alt="Logo" />
                <div className="footer-card">
                    <h3>Endereço</h3>
                    <p>Av. Bernardino de Campos, 98</p>
                    <p>São Paulo, SP 12345-678</p>
                </div>
                <div className="footer-card">
                    <h3>Contato</h3>
                    <p>info@email.com</p>
                    <p>Tel:(11) 3456-7890</p>
                </div>
                <div className="footer-card">
                    <h3>Horários</h3>
                    <p>Aberto todos os dias</p>
                    <p>10:00 - 22:00</p>
                </div>
            </div>
            <div className="final">
                    <p>Galateria. Orgulhosamente desenvolvido por 'Rafael Okida'</p>
            </div>
        </footer>
    )
};