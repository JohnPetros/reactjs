import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Relogio from "./components/Relocio";
import Numero from "./components/Numero";

function App() {

  const numero = 500

  return (
    <div>
      <Relogio />
      <Header />
      <Main />
      
      <Numero number={numero}/>
    </div>
  );
}

export default App;
