export default function SecaoContato(){
    return(
        <section className="secao-contato" id="contato">
            <div className="limitar-secao">
                <h2>Fale Conosco</h2>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
                <div className='contatos-card'>
                    <div className="contatos-container">
                        <h3>Contato</h3>
                        <div>
                            <img src="/assets/local.png" alt="Local" />
                            <p>Nova Iguaçu, RJ</p>
                        </div>
                        <div>
                            <img src="/assets/telefone.png" alt="Telefone" />
                            <p>(21) 9999-9999</p>
                        </div>
                        <div>
                            <img src="/assets/email.png" alt="Email" />
                            <p>contato@oticavida.com</p>
                        </div>
                    </div>
                    <div className="contatos-container">
                        <h3>Nossas redes sociais</h3>
                        <div>
                            <img src="/assets/fb.png" alt="" />
                            <p>/OticaVida</p>
                        </div>
                        <div>
                            <img src="/assets/ig.png" alt="" />
                            <p>@oticavidarj</p>
                        </div>
                        <div>
                            <img src="/assets/tt.png" alt="" />
                            <p>@oticavidarj</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};