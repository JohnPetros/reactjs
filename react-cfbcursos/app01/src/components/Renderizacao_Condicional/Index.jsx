import React from "react";

export default function Condicional() {
  const [log, setLog] = useState(false);

  const msgLogOn = () => "Usuário logado";
  const msgLogOff = () => "Por favor, logar";

  const [cor, setCor] = useState(1);

  const vermelho = { color: "#f00" };
  const verde = { color: "#0f0" };
  const azul = { color: "#00f" };

  const retornaCor = (c) => {
    if (c == 1) {
      return vermelho;
    } else if (c == 2) {
      return azul;
    } else {
      return verde;
    }
  };

  const mudaCor = () => {
    setCor(cor + 1);
    if (cor > 2) {
      setCor(1);
    }
  };

  const cumprimento = () => {
    const hora = new Date().getHours();

    if (hora >= 0 && hora < 13) {
      return <p>Bom dia</p>;
    } else if (hora >= 13 && hora < 18) {
      return <p>Bom tarde</p>;
    } else {
      return <p>Bom noite</p>;
    }
  };

  return (
    <>
      {cumprimento()}
      <p>{log ? msgLogOn() : msgLogOff()}</p>
      <button onClick={() => setLog(!log)}>{log ? "Logoff" : "Login"}</button>
      <h1 style={retornaCor(cor)}>CFB Cursos</h1>
      <button onClick={() => mudaCor()}>Mudar Cor</button>
    </>
  );
}
