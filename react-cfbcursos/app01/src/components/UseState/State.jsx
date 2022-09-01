import React from "react";
import Leds from "./Leds";

export default function State() {
  const cancelar = (obj) => obj.preventDefault();

  const [ligado, setLigado] = useState(false);

  return (
    <>
      <a href="#" target={"_blank"} onClick={(e) => cancelar(e)}>
        CFB Cursos
      </a>
      
      <Leds ligado={ligado} setLigado={setLigado} />
    </>
  );
}
