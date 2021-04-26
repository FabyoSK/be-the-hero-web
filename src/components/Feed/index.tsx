import { useCase } from "../../hooks/useCases";
import { Card } from "../Card";
import styles from "./feed.module.scss";

export function Feed() {
  const { cases } = useCase();
  return (
    <div>
      <h1>Casos cadastrados</h1>
      <div className={styles.cardContainer}>
        {cases.map((c) => {
          return <Card key={c.name} case={c} />;
        })}
      </div>
    </div>
  );
}
