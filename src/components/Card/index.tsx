import { useCause } from "../../hooks/useCause";
import { formatPrice } from "../../util/format";

import styles from "./card.module.scss";

interface CardProps {
  cause: {
    id: string;
    name: string;
    description: string;
    value: string;
    organization_id: string;
  };
}
export function Card(props: CardProps) {
  const { handleDeleteCause } = useCause();

  return (
    <div className={styles.card}>
      <button type="button" onClick={() => handleDeleteCause(props.cause.id)}>
        <img src="/trash.png" alt="Deletar" />
      </button>
      <div className={styles.cardSection}>
        <h2>Caso:</h2>
        <p>{props.cause.name}</p>
      </div>
      <div className={styles.cardSection}>
        <h2>Descrição:</h2>
        <p>{props.cause.description} </p>
      </div>
      <div className={styles.cardSection}>
        <h2>Valor:</h2>
        <p>{formatPrice(Number(props.cause.value))}</p>
      </div>
    </div>
  );
}
