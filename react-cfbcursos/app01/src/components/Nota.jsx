import React, { useState } from "react";

export default function Nota(props) {
  return (
    <>
      <legend>Informe a nota: {props.num}</legend>
      <input
        type="text"
        name={"nota" + props.num}
        value={props.nota}
        onChange={(e) => props.setNota(e)}
      />
    </>
  );
}
