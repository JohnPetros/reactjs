import React from "react";
import Globais from "./variaveis_globais";

export default function Info() {
  return (
    <>
      <p>{"Canal:" + Globais.canal}</p>
      <p>{"Curso:" + Globais.curso}</p>
      <p>{"Ano:" + Globais.ano}</p>
    </>
  );
}
