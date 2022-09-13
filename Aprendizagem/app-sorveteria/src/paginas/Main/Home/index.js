import React from "react";
import './style.css'
import SecaoBanner from "./SecaoBanner";
import SecaoSabores from "./SecaoSabores";
import SecaoEventos from "./SecaoEventos";
import SecaoSobre from "./SecaoSobre";
import Header from "../../Header";
import Footer from "../../Footer";

export default function Home (){
    return(

        <div>
            <Header></Header>
            <SecaoBanner />
            <SecaoSabores />
            <SecaoEventos />
            <SecaoSobre />
            <Footer></Footer>
        </div>
    )
};


