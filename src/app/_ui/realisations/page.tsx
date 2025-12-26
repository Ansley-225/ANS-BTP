import { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import { RecuperationRealisations } from "@/actionServer/realisation";
import styles from "./realisation.module.css";

export async function Realisation() {
  let realisations = null;
  try {
    realisations = await RecuperationRealisations();
  } catch (e) {
    console.error("erreur server", e);
  }
  if (!realisations?.data) {
    return (
      <section>
        <p> erreur server</p>
      </section>
    );
  }
  if (realisations.data?.length === 0) {
    return (
      <section>
        <p>il y a aucune realisation</p>
      </section>
    );
  }
  return (
    <section id="realisations" className={styles.section}>
      <div className={styles.conteneur_general}>
        <div className={styles.conteneur_textes}>
          <h2>Projet reccent</h2>
          <h3>Explorer nos réalisations</h3>
        </div>
        <div className={styles.conteneur_carte_images}>
          {realisations.data &&
            realisations.data.map((realisation) => (
              <Link key={realisation.id} href={`/realisations/${realisation.slug}`}>
                <div className={styles.conteneur_image} key={realisation.id}>
                  <Image
                    src={realisation.image}
                    alt={realisation.titre}
                    fill
                    objectFit="cover"
                  />
                  <div className={styles.detail_realisation}>
                    <p>{realisation.titre}</p>
                    <p>{realisation.description}</p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
