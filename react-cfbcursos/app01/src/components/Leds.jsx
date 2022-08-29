import React from "react";
import LedVermelho from "./imgs/led-vermelho.jpg";
import LedVerde from "./imgs/led-verde.jpg";

export default function Leds(props) {
  return (
    <>
      <img src={props.ligado ? LedVerde : LedVermelho} />
      <button onClick={() => props.setLigado(!props.ligado)}>
        {!props.ligado ? "Ligar" : "Desligar"}
      </button>
    </>
  );
}
