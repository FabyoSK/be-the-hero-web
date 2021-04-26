import { formatPrice } from "../../util/format";

import styles from "./card.module.scss";

interface CardProps {
  case: {
    name: string;
    description: string;
    value: string;
    organization_id: string;
  };
}
export function Card(props: CardProps) {
  return (
    <div className={styles.card}>
      <button type="button">
        <img src="/trash.png" alt="Deletar" />
      </button>
      <div className={styles.cardSection}>
        <h2>Caso:</h2>
        <p>{props.case.name}</p>
      </div>
      <div className={styles.cardSection}>
        <h2>Descrição:</h2>
        <p>{props.case.description} </p>
      </div>
      <div className={styles.cardSection}>
        <h2>Valor:</h2>
        <p>{formatPrice(Number(props.case.value))}</p>
      </div>
    </div>
  );
}
