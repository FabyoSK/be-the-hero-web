import { FormContainer } from "../../components/FormContainer";

import styles from "./newcase.module.scss";

export default function NewCase() {
  return (
    <FormContainer
      title="Cadastrar novo caso"
      body="Descreva o caso detalhadamente para 
      encontrar um herói para resolver isso."
      backPage="home"
    >
      <input type="text" placeholder="Título do caso" />
      <textarea placeholder="Descrição" />
      <input type="text" placeholder="Valor em reais" />
      <div className={styles.buttons}>
        <button>Cancelar</button>
        <button type="submit">Cadastrar</button>
      </div>
    </FormContainer>
  );
}
