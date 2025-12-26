import { ReactElement } from "react";
import Image from "next/image";
import styles from "./valeurs.module.css";

export function Valeurs(): ReactElement {
  const noValeurs = [
    {
      id: 1,
      icon: "/images/icons/fiabilité.png",
      titre: "fiabilité",
      description: "Description de la fiabilité",
    },
    {
      id: 2,
      icon: "/images/icons/exigence.png",
      titre: "Qualité",
      description: "Description de la qalité",
    },
    {
      id: 3,
      icon: "/images/icons/ecoute2.png",
      titre: "Écoute",
      description: "Description de l'écoute",
    },
    {
      id: 4,
      icon: "/images/icons/delais.png",
      titre: "Délais",
      description: "Description du delais",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.conteneur_carte}>
        {noValeurs.map((valeur, index) => (
          <div
            key={valeur.id}
            // On ajoute la classe 'visible' dynamiquement
            className={styles.carte_valeur}
            style={{ "--i": index } as React.CSSProperties}
          >
            <div className={styles.icon}>
              <Image
                src={valeur.icon}
                alt={valeur.titre}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <h3>{valeur.titre}</h3>
            <p>{valeur.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
