import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PaginaInicial from '../componentes/paginas/PaginaInicial';
import PaginaFrontEnd from '../componentes/paginas/PaginaFrontEnd';
import PaginaBackEnd from '../componentes/paginas/PaginaBackEnd';

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={ <PaginaInicial/> } />
            <Route path='/front-end' element={ <PaginaFrontEnd/> } />
            <Route path='/back-end' element={ <PaginaBackEnd/> } />
        </Routes>
    </BrowserRouter>
);

export default Rotas;