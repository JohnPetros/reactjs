import React from "react";

export default class ClasseBase extends React.Component {
  constructor(props) {
    // Instruções do construtor
    super(props); // Para permitir o uso de props
    this.state = {
      canal: "CFB Cursos",
      curso: "React",
      ativo: true,
      nome: this.props.nomeAluno,
    };
    this.status = this.props.status;

    // Binding
    let ad = ativarDesativar.bind(this);
  }

  // Função para manipular state
  ativarDesativar() {
    this.setState((state) => {
      ativo = !state.ativo;
    });
  }

  componentDidMount() {
    console.log("O componente foi criado");
  }

  componentDidUpdate() {
    console.log("O componente foi atualizado");
  }

  componentWillUnmount() {
    console.log("O componente foi removido");
  }

  render() {
    return (
      <>
        <h1>Componente de Classe</h1>
        {/* Chamada da função com binding */}
        <button onClick={this.ad}>Ativar / Desativar</button>
        <button onClick={() => this.ativarDesativar()}>
          Ativar / Desativar
        </button>
      </>
    );
  }
}
