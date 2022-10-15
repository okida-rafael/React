import './style.css';
import { useState } from 'react';

export default function Componente() {

  const [estiloAtualizado, setEstiloAtualizado] = useState(true);

  const alterarModo = () => {
    setEstiloAtualizado(!estiloAtualizado);
  };
  
    return (
      <div className='app-componente'>
         <div className={estiloAtualizado ? 'modo-claro' : 'modo-escuro'} >
           
              <header className='limitar-secao'>
                  <img className='logo' src="./assets/barbearia-logo.png" alt="Logo Barber Shop" />
                <div className="botao">
                  <button className={estiloAtualizado ? 'modo-claro' : 'modo-escuro'} onClick={alterarModo}>
                      <img src={estiloAtualizado ? "./assets/moon.png" : "./assets/sun.png"} alt="Botão" />
                      <span>{estiloAtualizado ? 'Dark' : 'Light'}</span>
                  </button>
                </div>
              </header>
              <section className="banner-sec">
              </section>
              <section className="texto-sec limitar-secao">
                <h1>Bem-vindo a Barber Shop</h1>
                <p className='texto-destaque'>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</p>
                <p>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>
                <p className='assinatura'>S. Kelly</p>
              </section>
            </div>
         </div>
    
    )
  }