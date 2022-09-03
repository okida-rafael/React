export default function SecaoSobre(){
    return(
        <section className="secao-sobre" id="sobre">
            <div className="limitar-secao">
                <h2>Quem somos nós?</h2>
                <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
                <div className="box-sobre">
                    <img src="/assets/loja.png" alt="Loja" />
                    <div className="box">
                        <h3>Nossas Filiais</h3>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </div>
                    <div className="box">
                        <h3>Atendimento flexível</h3>
                        <p>Nossa equipe possui é treinada para te atender</p>
                    </div>
                    <img src="/assets/atendimento.png" alt="Atendimento" />
                </div>
            </div>
        </section>
    );
};