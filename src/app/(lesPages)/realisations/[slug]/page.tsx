import { notFound } from "next/navigation";
import { recuperationSlug } from "@/fonction/recuerationSlugRealisations";
import styles from "./slug.module.css";
import Image from "next/image";
import Link from "next/link";

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;

  const detail = await recuperationSlug(slug);
  if (!detail || !detail?.data || !detail?.success) {
    return {
      title: "erreur-404",
      description: "ce service n'existe pas ou a été deplacé ",
    };
  }
  return {
    title: detail.data.titre,
    description: detail.data.description,
    openGraph: {
      title: detail.data.titre,
      description: detail.data.description,
      type: "website",
    },
  };
}

export default async function RealisationPage({ params }: Params) {
  const { slug } = await params;

  const Icones = {
    surface: "📐",
    duree: "⏱️",
    budget: "💰",
    annee: "📅",
    client: "👤",
    lieu: "📍",
    statut: "✅",
  };

  const detail = await recuperationSlug(slug);
  if (!detail || !detail?.data || !detail?.success) return notFound();

  return (
    <section className={styles.section}>
      <div className={styles.comteneur_general}>
        <div className={styles.second_conteneur_general}>
          <div className={styles.conteneur_image}>
            <Image
              title={detail.data.titre}
              alt={detail.data.titre}
              src={detail.data.image}
              fill
              objectFit="cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className={styles.conteneur_info}>
            <h1 className={styles.h1}>{detail.data.titre}</h1>
            <div className={styles.conteneur_info_construction}>
              <div className={styles.icon}>
                <span>{Icones.annee} Date Debut</span>
              </div>
              <div className={styles.icon}>
                <span>{Icones.annee} Date Fin</span>
              </div>
              <div className={styles.icon}>
                <span>{Icones.surface} Superficie e</span>
              </div>
              <div className={styles.icon}>
                <span>{Icones.lieu} Lieu</span>
              </div>
              <div className={styles.icon}>
                <span>{Icones.client} Client</span>
              </div>
              <div className={styles.icon}>
                {Icones.statut}
                Status
              </div>
            </div>
            <div className={styles.conteneur_description}>
              <p>{detail.data.description} </p>
            </div>
          </div>
        </div>
        <div className={styles.conteneur_dif}>
          <h2 className={styles.sTitre}>
            Les dificultés rencontré lors de ce projet
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
            incidunt aspernatur tempore sequi eius animi, culpa at. Unde
            accusantium nihil laboriosam enim praesentium ea, fugiat a, facilis
            dignissimos quasi repellendus?
       
          </p>
          <h2 className={styles.sTitre}>
            Les solutions face au dificultés rencontré lors de ce projet
          </h2>
          <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita sint consectetur ad libero, velit reiciendis necessitatibus quis laboriosam quos quasi enim corporis labore, aliquam nulla beatae porro tempore blanditiis cum.

          
          </p>
        </div>
        <div className={styles.conteneur_cta}>
          <h2>Nous sommes disponibles pour tous vos travaux</h2>
          <Link className={styles.cta} href="/#contacts">
            Contactez-nous
          </Link>
        </div>
      </div>
    </section>
  );
}
