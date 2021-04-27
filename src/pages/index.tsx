import { useState } from "react";
import { useCase } from "../hooks/useCases";
import { api } from "../services/api";
import styles from "./home.module.scss";

export default function Home() {
  const [id, setId] = useState("");
  const { handleLogin } = useCase();

  function onLogin() {
    handleLogin(id);
  }

  return (
    <div className={styles.homeContainer}>
      <div>
        <img src="./logo.png" alt="Be The Hero" className={styles.logo} />
        <div className={styles.loginContainer}>
          <h1>Faça seu login</h1>
          <input
            type="text"
            placeholder="Sua ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button onClick={onLogin}>Entrar</button>
        </div>
      </div>
      <div className={styles.peopleContainer}>
        <img src="./peoples.png" alt="" />
      </div>
    </div>
  );
}
