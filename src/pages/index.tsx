import styles from "./home.module.scss";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div>
        <img src="./logo.png" alt="Be The Hero" className={styles.logo} />
        <div className={styles.loginContainer}>
          <h1>Faça seu login</h1>
          <input type="text" placeholder="Sua ID" />
          <button>Entrar</button>
        </div>
      </div>
      <div className={styles.peopleContainer}>
        <img src="./peoples.png" alt="" />
      </div>
    </div>
  );
}
