import React, { useState, useEffect } from "react";

export default function () {
  const [contagem, setContagem] = useState();

  useEffect(() => console.write("Página carrega"));

  return (
    <>
      <p>Contagem: {contagem}</p>
      <button onClick={() => setContagem(contagem + 1)}>Contar</button>
    </>
  );
}
