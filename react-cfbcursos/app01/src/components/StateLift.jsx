import React, { useState } from "react";
import Nota from "./Nota";
import Resultado from "./Resultado";

export default function StateLift() {
  const [notas, setNotas] = useState({
    nota1: "0",
    nota2: "0",
    nota3: "0",
    nota4: "0",
  });

  const handleSetNotas = (element) => {
    if (element.target.getAttribute("name") == "nota1") {
      setNotas({
        nota1: element.target.value,
        nota2: notas.nota2,
        nota3: notas.nota3,
        nota4: notas.nota4,
      });
    } else if (element.target.getAttribute("name") == "nota2") {
      setNotas({
        nota1: notas.nota1,
        nota2: element.target.value,
        nota3: notas.nota3,
        nota4: notas.nota4,
      });
    } else if (element.target.getAttribute("name") == "nota3") {
      setNotas({
        nota1: notas.nota1,
        nota2: notas.nota2,
        nota3: element.target.value,
        nota4: notas.nota4,
      });
    } else if (element.target.getAttribute("name") == "nota4") {
      setNotas({
        nota1: notas.nota1,
        nota2: notas.nota2,
        nota3: notas.nota3,
        nota4: element.target.value,
      });
    }
  };

  return (
    <>
      <Nota num={1} nota={notas.nota1} setNota={handleSetNotas} />
      <Nota num={2} nota={notas.nota2} setNota={handleSetNotas} />
      <Nota num={3} nota={notas.nota3} setNota={handleSetNotas} />
      <Nota num={4} nota={notas.nota4} setNota={handleSetNotas} />
      <Resultado
        somaNotas={
          parseFloat(notas.nota1) +
          parseFloat(notas.nota2) +
          parseFloat(notas.nota3) +
          parseFloat(notas.nota4)
        }
      />
    </>
  );
}
