"use client";
import { ReactElement } from "react";
import styles from "./presentation.module.css";
import { AutoStartCounter } from "../chiffre_incremente/page";

export function Presentation(): ReactElement {
  return (
    <section id="apropos" className={styles.section}>
      <div className={styles.conteneur_general}>
        <div className={styles.conteneur_textes}>
          <div className={styles.conteneur_texte1}>
            <h2>À propos de nous</h2>
            <p>
              Nous travaillons <span> depuis 1995</span> pour vous dans le BTP
            </p>
          </div>
          <div className={styles.conteneur_texte2}>
            <p>Bienvenue chez Ans-btp leader du BTP en Afrique</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium, suscipit soluta quis nesciunt itaque voluptates
              repudiandae quidem quae eius qui voluptatibus voluptas hic dolore
              mollitia odio magnam quos reiciendis necessitatibus?
            </p>
          </div>
        </div>
        <div
          role="img"
          aria-label="Illustration représentant nos réalisations BTP"
          className={styles.conteneur_image}
        ></div>
        <div className={styles.conteneur_chiffres}>
          <div>
            <AutoStartCounter chiffre={30} motCle="ans" />
            <p style={{ fontSize: "2rem", fontWeight: "bold" }}>
              {" "}
              d'expertise en BTP
            </p>
          </div>

          <div>
            <AutoStartCounter motCle="+" chiffre={40} />
            <p style={{ fontSize: "2rem", fontWeight: "bold" }}>
              Projets réalisés
            </p>
          </div>

          <div>
            <AutoStartCounter chiffre={90} motCle="%" />
            <p style={{ fontSize: "2rem", fontWeight: "bold" }}>
              Satisfaction client
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
