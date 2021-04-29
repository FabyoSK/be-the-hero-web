import { useCause } from "../../hooks/useCause";
import { Card } from "../Card";
import styles from "./feed.module.scss";

export function Feed() {
  const { causes } = useCause();
  return (
    <div>
      <h1>Casos cadastrados</h1>
      <div className={styles.cardContainer}>
        {causes.map((cause) => {
          return <Card key={cause.name} cause={cause} />;
        })}
      </div>
    </div>
  );
}
