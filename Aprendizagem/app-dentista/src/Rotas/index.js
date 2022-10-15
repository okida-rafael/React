import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../Paginas/Home';
import Contato from '../Paginas/Contato';

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={ <Home /> } />
            <Route exact path='/contato' element={ <Contato />} />
        </Routes>
    </BrowserRouter>
);

export default Rotas;