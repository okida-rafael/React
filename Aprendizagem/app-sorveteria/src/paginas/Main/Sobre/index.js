import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import './style.css';
export default function Sobre(){
    return(
        <div>
            <Header></Header>
            <main>
                <section className="sobre-banner">
                    <h1>A Gelateria</h1>
                </section>
                <div className="sobre-texto">
                    <h2>Sobre Nós</h2>
                    <span>Nós simplesmente amamos sorvete!</span>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam odit ipsa at, harum quas tenetur atque distinctio hic neque ducimus qui animi facilis accusamus, placeat id expedita unde dolorem assumenda! Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatibus beatae rem cumque asperiores. Quisquam laboriosam eius atque debitis libero. Placeat laborum a quisquam ex, quam rerum. Non, quaerat distinctio.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus ab modi ratione perferendis natus quam! Ab asperiores odio fugiat exercitationem repudiandae sunt qui! Laboriosam tenetur mollitia ipsam iusto est enim. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt maxime vitae nesciunt impedit atque quos aperiam veritatis quisquam ratione odit tempore corporis ut iure delectus, dolorem dignissimos sequi omnis voluptatem.</p>

                </div>
                <div className="sobre-img">
                    <img src="/assets/sobre-image.jpg" alt="Imagem" />
                    <img src="/assets/sorveteria.jpg" alt="" />
                </div>
            </main>
            <Footer></Footer>
        </div>
    )
};