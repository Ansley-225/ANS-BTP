import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.icon}>🏗️</div>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>Page introuvable</h2>
        <p className={styles.description}>
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link href="/" className={styles.btn}>
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
