import styles from "./card.module.scss";

export function Card() {
  return (
    <div className={styles.card}>
      <button type="button">
        <img src="./trash.png" alt="Deletar" />
      </button>
      <div className={styles.cardSection}>
        <h2>Caso:</h2>
        <p>Cadelinha atropelada</p>
      </div>
      <div className={styles.cardSection}>
        <h2>Descrição:</h2>
        <p>
          A cadelinha Jolie foi atropelada por um carro no bairro Santana e teve
          que passar por uma cirurgia às pressas.
        </p>
      </div>
      <div className={styles.cardSection}>
        <h2>Valor:</h2>
        <p>R$ 120,00 reais</p>
      </div>
    </div>
  );
}
