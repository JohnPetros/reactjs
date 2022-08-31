import React from "react";

export default function App() {
  const carros = ["HRV", "GOLF", "FOCUS", "CRUZE", "ARGO"];
  const listaCarros = carros.map((carro, index) => <li>{index} - {carro}</li>);

  return (
    <>
      <ul>{listaCarros}</ul>
    </>
  );
}
