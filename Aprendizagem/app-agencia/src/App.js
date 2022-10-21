import React, { useState} from 'react';
import './App.css';
import Topo from './componentes/Topo';
import Banner from './componentes/SecaoBanner';
import ExpTrabalho from './componentes/SecaoExpTrabalho';
import Rodape from './componentes/Rodape';

function App() {
  const [modo, setModo] = useState(true);

  const alteraModo = ()=> {
    setModo(!modo) ;
  }
  return (
    <div className="App">
      <Topo alteraModo = {alteraModo} modo = {modo}></Topo>
      <Banner modo = {modo}></Banner>
      <ExpTrabalho modo = {modo}></ExpTrabalho>
      <Rodape modo = {modo}></Rodape>
    </div>
  );
};

export default App;
