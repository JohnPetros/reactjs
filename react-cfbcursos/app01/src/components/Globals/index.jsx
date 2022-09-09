import React, { useState} from "react";
import Globais from "./variaveis_globais";
import Info from "./info";

export default function Global() {
  const [resumo, setResumo] = useState(Globais.resumo);

  const gravarResumo = () => {
    Globais.resumo = resumo;
  };

  const verResumo = () => {
    alert(Globais.resumo);
  };

  return (
    <>
      <Info />
      <p>{"Canal: " + Globais.canal}</p>
      <p>{"Curso: " + Globais.curso}</p>
      <p>{"Ano: " + Globais.ano}</p>
      <hr />
      <input
        type="text"
        size="100"
        value={resumo}
        onChange={(e) => setResumo(e.target.value)}
      />
      <button onClick={() => gravarResumo()}>Gravar Resumo</button>
      <button onClick={() => verResumo()}>Ver Resumo</button>
    </>
  );
}
