import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../paginas/Main/Home";
import Sabores from "../paginas/Main/Sabores";
import Sobre from "../paginas/Main/Sobre";

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={ <Home/> } />
            <Route path='/sabores' element={ <Sabores/> } />
            <Route path='/sobre' element={ <Sobre/> } />
        </Routes>
    </BrowserRouter>
);

export default Rotas;



