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
import LocalStorage from "./components/LocalStorage";
import ClassComponent from "./components/ClassComponent"
import Globais from "./components/Globals";

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

      <LocalStorage />

      <ClassComponent canal="CFB Cursos" curso="Curso de React"/>

      <Globais />
    </div>
  );
}

export default App;
