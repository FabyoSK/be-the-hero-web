import { ReactNode } from "react";
import Link from "next/link";
import styles from "./form.module.scss";

interface FormContainerProps {
  title: string;
  body: string;
  backPage: string;
  backPageURL: string;
  children: ReactNode;
}

export function FormContainer({
  title,
  body,
  backPage,
  backPageURL,
  children,
}: FormContainerProps) {
  return (
    <div className={styles.formContainer}>
      <div className={styles.formInfo}>
        <img src="./logo.png" alt="Be The Hero" className={styles.logo} />
        <h1>{title}</h1>
        <p>{body}</p>

        <Link href={backPageURL}>
          <button>
            <img src="./back.png" alt={`voltar para ${backPage}`} />
            <span>Voltar para o {backPage}</span>
          </button>
        </Link>
      </div>
      <div className={styles.formInputs}>{children}</div>
    </div>
  );
}
