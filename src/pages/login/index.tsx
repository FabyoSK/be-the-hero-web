import { FormContainer } from "../../components/FormContainer";

import styles from "./login.module.scss";

export default function Login() {
  return (
    <FormContainer
      title="Cadastro"
      body="Faça seu cadastro, 
       entre na plataforma e 
       ajude pessoas a encontrarem
       os casos da sua ONG."
      backPage="login"
      backPageURL="/"
    >
      <input type="text" placeholder="Nome da ONG" />
      <input type="text" placeholder="E-mail" />
      <input type="text" placeholder="WhatsApp" />
      <div className={styles.cityInput}>
        <input type="text" placeholder="Cidade" />
        <input type="text" placeholder="UF" />
      </div>
      <button type="submit">Cadastrar</button>
    </FormContainer>
  );
}
