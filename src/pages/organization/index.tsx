import { Feed } from "../../components/Feed";
import { Header } from "../../components/Header";

import styles from "./list.module.scss";

export default function List() {
  return (
    <div className={styles.container}>
      <Header />
      <Feed />
    </div>
  );
}
