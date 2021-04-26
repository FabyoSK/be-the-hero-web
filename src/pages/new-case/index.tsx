import { FormEvent, useState } from "react";
import { FormContainer } from "../../components/FormContainer";
import { api } from "../../services/api";

import styles from "./newcase.module.scss";

export default function NewCase() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  async function handleFormSubmit(e: FormEvent) {
    e.preventDefault();

    const response = await api.post("cases", {
      id: Math.random(),
      description,
      value,
    });

    console.log(response.data);
  }
  return (
    <FormContainer
      title="Cadastrar novo caso"
      body="Descreva o caso detalhadamente para 
      encontrar um herói para resolver isso."
      backPage="home"
      backPageURL="/list"
    >
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Título do caso"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Valor em reais"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className={styles.buttons}>
          <button>Cancelar</button>
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </FormContainer>
  );
}
