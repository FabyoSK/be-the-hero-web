import { Card } from "../Card";
import styles from "./feed.module.scss";

export function Feed() {
  return (
    <div>
      <h1>Casos cadastrados</h1>
      <div className={styles.cardContainer}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
