import styles from "./header.module.scss";

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <img src="./logo.png" alt="logo" />
        <p>Bem vinda, APAD</p>
      </div>
      <div className={styles.buttons}>
        <button className={styles.buttonAdd}>Cadastrar novo caso</button>
        <button className={styles.buttonLogout}>
          <img src="./power.png" alt="logout" />
        </button>
      </div>
    </div>
  );
}
