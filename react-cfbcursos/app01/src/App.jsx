import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Relogio from "./components/Relocio";
import UseState from "./components/UseState/State";
import Props from "./components/Props"
import Condicional from "./components/Renderizacao_Condicional/Index";
import Lista from "./components/Lista"
import Formulario from "./components/Formulario"
import StateMultiComponents from "./components/State-Multicomponent";
import StateLift from "./components/StateLift";

function App() {


  return (
    <div>
      <Relogio />
      <Header />
      <Main />

      <UseState />

      <Props />

      <Condicional />

      <Lista />

      <Formulario />

      <StateMultiComponents />

      <StateLift />
    </div>
  );
}

export default App;
