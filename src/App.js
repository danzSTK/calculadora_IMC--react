import React, { Component, useState } from "react";
import Formulario from "./components/Formulario";
import Tabela from "./components/Tabela";


function App(){

  const [rendizaFormulario, setRenderizaFormulario] = useState(false)

  const submitFormulario = () => {
    setRenderizaFormulario(valorAtual => !valorAtual);
  }
  return(
    <div className="container">
      <Formulario submitForm={submitFormulario} />
      
      {rendizaFormulario && 
        <Tabela />
      }
    </div>

  )

}


export default App;