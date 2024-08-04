import React, { Component, useState } from "react";
import Formulario from "./components/Formulario";



function App(){

  const [rendizaFormulario, setRenderizaFormulario] = useState(true)

  const submitFormulario = () => {
    setRenderizaFormulario(valorAtual => !valorAtual);
  }
  return(
    <div className="container">
      <Formulario submitForm={submitFormulario} />
      <p>estado atua {rendizaFormulario ? "rendizei o formulario" : "nao renderizei o formulario"}</p>

    </div>

  )

}


export default App;