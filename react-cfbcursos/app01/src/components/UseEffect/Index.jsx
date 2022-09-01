import React, { useState, useEffect } from "react";

export default function () {
  const [contagem, setContagem] = useState();

  useEffect(
    () => {
      console.log("Página carregada")
      document.title = "Contagem: " + contagem
  }
  )
  return (
    <>
      <p>Contagem: {contagem}</p>
      <button onClick={() => setContagem(contagem + 1)}>Contar</button>
    </>
  );
}
