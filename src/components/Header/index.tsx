import Link from "next/link";
import { useCase } from "../../hooks/useCases";
import styles from "./header.module.scss";

export function Header() {
  const { organization } = useCase();
  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <img src="/logo.png" alt="logo" />
        <p>Bem vinda, {organization?.name ?? "ONG"}</p>
      </div>
      <div className={styles.buttons}>
        <Link href="/new-case">
          <button className={styles.buttonAdd}>Cadastrar novo caso</button>
        </Link>
        <button className={styles.buttonLogout}>
          <img src="/power.png" alt="logout" />
        </button>
      </div>
    </div>
  );
}
