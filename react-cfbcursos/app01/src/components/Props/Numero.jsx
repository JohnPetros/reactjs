import React, { useState } from "react";

export default function Numero(props) {
  const [num, setNum] = useState(100);

  return (
    <p>
      <p>Valor do state numero: {num}</p>
      <button onClick={() => setNum(num + props.number)}>Somar 100</button>
    </p>
  );
}
