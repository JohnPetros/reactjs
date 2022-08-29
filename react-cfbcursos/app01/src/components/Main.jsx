import React from "react";
import Data from "./Data";
import './Main.css'

function App() {
  const Canal = () => {
    return "CFB Cursos";
  };

  const canal = "CFB Cursos";
  const youtube = "youtube.com/cfbcursos";
  const curso = "Curso de ReactJs";
  const Soma = (n1, n2) => n1 + n2;

  const textoDestaque = {
    color: '#00f',
    fontSize: '3em',
  }

  return (
    <div className="container">
      <h2 style={{color: '#f00', fontSize: 20}}>Curso de React</h2>
      <p style={textoDestaque}>Se inscreva em nosso canal</p>
      <p className="texto">Curso React</p>
      {/* <Data canal={Canal} youtube={youtube} curso={curso} soma={Soma} /> */}
      <a href="#" className="link" target={'_blank'}>CFB Cursos</a>
    </div>
  );
}

export default App;
