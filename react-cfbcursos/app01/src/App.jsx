import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Relogio from "./components/Relogio";
import UseState from "./components/UseState/State";
import Props from "./components/Props";
import Condicional from "./components/Renderizacao_Condicional/Index";
import Lista from "./components/Lista";
import Formulario from "./components/Formulario";
import StateMultiComponents from "./components/State-Multicomponent";
import StateLift from "./components/StateLift";
import Contencao from "./Contencao";
import UseEffect from "./components/UseEffect";

function App() {
  return (
    <div>
      <Relogio />
      <Header />
      <Main />

      {/* <UseState />

      <Props />

      <Condicional /> */}

      <Lista />

      <Formulario />

      <StateMultiComponents />

      <StateLift />

      <Contencao />

      <UseEffect />
    </div>
  );
}

export default App;
