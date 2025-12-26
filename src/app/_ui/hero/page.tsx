import styles from "./hero.module.css";
import Link from "next/link";
export function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.conteneur_hero}>
        <div className={styles.conteneur_texte}>
          <h1 className={styles.animate_title}>
            Votre projet de <span>construction</span>, notre priorité
          </h1>
          <p className={styles.animate_subtitle}>
            Un accompagnement personnalisé de l'étude de faisabilité à la
            livraison de votre chantier.
          </p>
          <Link href="/#contacts">
            <button className={`${styles.cta_button} ${styles.animate_button}`}>
              Nous contacter
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
