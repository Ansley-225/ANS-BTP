import { ReactElement } from "react";
import Image from "next/image";
import styles from "./valeurs.module.css";

export function Valeurs(): ReactElement {
  const noValeurs = [
    {
      id: 1,
      icon: "/images/icons/fiabilité.png",
      titre: "fiabilité",
     
    },
    {
      id: 2,
      icon: "/images/icons/exigence.png",
      titre: "Qualité",
     
    },
    {
      id: 3,
      icon: "/images/icons/ecoute2.png",
      titre: "Écoute",
      
    },
    {
      id: 4,
      icon: "/images/icons/delais.png",
      titre: "Délais",
     
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
           
          </div>
        ))}
      </div>
    </section>
  );
}
