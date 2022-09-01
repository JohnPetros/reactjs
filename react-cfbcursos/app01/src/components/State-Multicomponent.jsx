import React, { useState } from "react";

export default function App() {
  const [form, setForm] = useState({ nome: "", curso: "", ano: "" });

  const handleFormChange = (element) => {
    if (element.target.getAttribute("name") == "fnome") {
      setForm({ nome: element.target.value, curso: form.curso, ano: form.ano });
    } else if (element.target.getAttribute("name") == "fcurso") {
      setForm({ nome: form.nome, curso: element.target.value, ano: form.ano });
    } else if (element.target.getAttribute("name") == "fano") {
      setForm({ nome: form.nome, curso: form.curso, ano: element.target.value });
    }
  };

  return (
    <>
      <label>Nome</label>
      <input
        type="text"
        name="fnome"
        value={form.nome}
        onChange={(e) => handleFormChange(e)}
      />
      <label>Curso</label>
      <input
        type="text"
        name="fcurso"
        value={form.curso}
        onChange={(e) => handleFormChange(e)}
      />
      <label>Ano </label>
      <input
        type="text"
        name="fano"
        value={form.ano}
        onChange={(e) => handleFormChange(e)}
      />

      <p>Nome digitado: {form.nome}</p>
      <p>Curso digitado: {form.curso}</p>
      <p>Ano digitado: {form.ano}</p>
    </>
  );
}
