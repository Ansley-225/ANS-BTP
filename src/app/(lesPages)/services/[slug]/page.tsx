import { notFound } from "next/navigation";
import { recuperationSlug } from "@/fonction/recuperationSlugService";
import { Header } from "../../../_ui/header/header";
import { Contact } from "../../../_ui/contact_header/page";
import{Footer}from"../../../_ui/footer/page"

import styles from "./slug.module.css";
import Image from "next/image";
import Link from "next/link";

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const detail = await recuperationSlug(slug);

  if (!detail || !detail?.data || !detail?.success)
    return {
      title: "erreur-404",
      description: "ce service n'existe pas ou a été deplacé ",
    };
  return {
    title: `${detail.data.titre}`,
    description: detail.data.description,
    openGraph: {
      title: detail.data.titre,
      description: detail.data.description,
      type: "website",
    },
  };
}
export default async function ServicePage({ params }: Params) {
  const { slug } = await params;

  const detail = await recuperationSlug(slug);

  if (!detail || !detail?.data || !detail?.success) return notFound();

  const toutesLesRealisations = [
    ...detail.data.realisation_travauxPubilcs,
    ...detail.data.serviceRealisationIngenieries,
    ...detail.data.realisations,
  ];
  return (
    <>
      <Contact />
      <Header />

      <section className={styles.section}>
        <div className={styles.conteneur_general}>
          <div className={styles.conteneur_slid}>
            <Image
              alt={detail.data.titre}
              src={detail.data.image}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
            {/* Overlay sombre */}
            <div className={styles.overlay}></div>

            <h1> {detail.data.titre}</h1>
          </div>

          <div className={styles.construction}>
            <div className={styles.texte_construction}>
              <h2>{detail.data.sousTitre1}</h2>

              <p>{detail.data.detailSoutitre1}</p>
              <h3>{detail.data.modeEmploie}</h3>
              <p>{detail.data.detailModeEploie1}</p>
            </div>

            <div className={styles.image_construction}>
              <Image
                alt="image de construction"
                src={`${detail.data.image2}`}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          {detail.data.sousTitre2 && (
            <div className={styles.renovation}>
              <div className={styles.image_renovation}>
                <Image
                  alt="image revovation"
                  src={`${detail.data.image3}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.texte_renovation}>
                <h2>{detail.data.sousTitre2}</h2>
                <p>{detail.data.detailSoutitre2}</p>
                <h3>{detail.data.modeEmploie}</h3>
                <p>{detail.data.detailModeEploie2}</p>²
              </div>
            </div>
          )}

          <div className={styles.realisation_construction_renovation}>
            <h2>Quelques réalisations</h2>
            <div className={styles.conteneur_realisations}>
              {toutesLesRealisations.map((realise) => (
                <div key={realise.id} className={styles.image}>
                  <Image
                    src={realise.image}
                    alt={`Réalisation pour ${detail.data?.titre} - ${realise.id}`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.conteneur_cta}>
            <h2>Nous sommes disponibles pour tous vos travaux</h2>
            <Link className={styles.cta} href="/#contacts">
              Contactez-nous
            </Link>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
