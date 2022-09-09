import React from "react";
import Carro from "./carro";
import { useState } from "react";

class Classe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carro: true,
    };
  }
  mostrarOcultar() {
    this.setState((state) => ({ carro: !state.carro }));
  }

  render() {
    return (
      <div>
        <h1>Primeiro Componente de Classe</h1>
        {this.state.carro ? <Carro fator={10} /> : null}
        <p>Canal: {this.props.canal}</p>
        <p>Curso: {this.props.curso}</p>

        <button onClick={() => this.mostrarOcultar()}>Ocultar</button>
      </div>
    );
  }
}

export default Classe;
