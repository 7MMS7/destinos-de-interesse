import "./PersonalForm.css";
import React, { useState } from "react";

// Função para validar o cpf
const maskCPF = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
};

// Função para validar o telefone
const maskPhone = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/(-\d{4})(\d+?)$/, "$1");
};


// Função para validar o nome
const maskName = (value) => {
  return value.replace(/[0-9!@#¨$%^&*)(+=._-]+/g, "");
};

// Função para validar o email
const validEmail = (value) => {
  let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
  if (regex.test(value)) {
    return true;
  } else {
    return false;
  }
}

// Formulário resposavel pelos campos de multi select de cidade e país
function PersonalForm() {
  const [cpf, setCPF] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // HTML do componente
  return (
    <div className="PersonalForm">
      <form className="Form">
        <div className="FormRow">
          <h1>Dados pessoais</h1>
        </div>
        <div className="FormRow">
          <label>Nome</label>
          <input
            required
            value={name}
            onChange={(e) => setName(maskName(e.target.value))}
          />
        </div>
        <div className="FormRow">
          <label>Email</label>
          <input
            required
            value={email}
            onChange={(e) => { 
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="FormRow">
          <label>Telefone</label>
          <input
            required
            value={phone}
            onChange={(e) => setPhone(maskPhone(e.target.value))}
          />
        </div>
        <div className="FormRow">
          <label>CPF</label>
          <input
            required
            value={cpf}
            onChange={(e) => setCPF(maskCPF(e.target.value))}
          />
        </div>
      </form>
    </div>
  );
}

export default PersonalForm;
