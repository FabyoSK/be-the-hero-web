import { FormEvent, useState } from "react";
import { useRouter } from "next/router";

import { FormContainer } from "../../components/FormContainer";
import { api } from "../../services/api";

import styles from "./login.module.scss";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsApp, setWhatsApp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  const router = useRouter();

  async function handleFormSubmit(e: FormEvent) {
    e.preventDefault();

    const response = await api.post("organizations", {
      id: Math.random(),
      name,
      email,
      whatsApp,
      city,
      uf,
    });

    router.push(`/organization/${name}`);
  }
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
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Nome da ONG"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="WhatsApp"
          value={whatsApp}
          onChange={(e) => setWhatsApp(e.target.value)}
        />
        <div className={styles.cityInput}>
          <input
            type="text"
            placeholder="Cidade"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="text"
            placeholder="UF"
            value={uf}
            onChange={(e) => setUf(e.target.value)}
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </FormContainer>
  );
}
