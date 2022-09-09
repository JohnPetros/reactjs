import React, { useState, useEffect } from "react";
import Pagina1 from "./pagina1";
import Pagina2 from "./pagina2";

export default function Navigation() {
  const [pagina, setPagina] = useState(0);

  const linksPaginas = (p) => {
    if (p == 1) {
        window.open('http://127.0.0.1:5173?1', '_self')
    } else if (p == 2) { 
        window.open('http://127.0.0.1:5173?2', '_self')
    }
  }

  useEffect(
    () => {
        const url = window.location.href;
        const res = url.split('?')
        setPagina(res[1])
    }
  )

  const retornarPagina = () => {
    if (pagina == 1) {
      return <Pagina1 />;
    } else if (pagina == 2) {
      return <Pagina2 />;
    } else {
      return (
        <div>
          <button onClick={() => linksPaginas(1)}>Página 1</button>
          <button onClick={() => linksPaginas(2)}>Página 2</button>
        </div>
      );
    }
  };

  return <>{retornarPagina()}</>;
}
