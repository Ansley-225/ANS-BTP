
import Image from "next/image";
import styles from "./services.module.css";
import Link from "next/link";
import { RecuperationServices } from "@/actionServer/services";
import { notFound } from "next/navigation";
import { use } from "react";

export async function Services(){



  
  const Services = await RecuperationServices();

  // Gestion des erreurs
  if (!Services.data) {
    console.error("erreur server", Services.error);
    return notFound();
  }
  // Vérification si aucun service n'est disponible
  if (Services.data.length === 0) {
    return (
      <section className={styles.service_absent}>
        <h2>Nos service</h2>
        <p>Aucun services disponible</p>
      </section>
    );
  }

  return (
    <section id="services" className={styles.section}>
      <div className={styles.conteneur_general}>
        <div className={styles.conteneur_texte}>
          <h2>Nos services</h2>
          <h3>Fournir des solutions de toutes sorte</h3>
        </div>
        <div className={styles.conteneur_carte_service}>
          {Services.data.map((service, index) => (
            <div
              className={styles.carte_service}
              key={service.id}
              style={{ "--i": index } as React.CSSProperties} // Injection de l'index
            >
              <Link href={`/services/${service.slug}`}>
                <div className={styles.conteneur_image}>
                  <Image
                    src={service.image}
                    alt={service.titre}
                    fill
                    className={styles.imgg}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </Link>
              <div className={styles.texte}>
                <h3>{service.titre}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
