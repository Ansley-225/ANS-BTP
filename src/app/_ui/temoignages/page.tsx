"use client";
import styles from "./temoignages.module.css";
import { ReactElement } from "react";
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export function Temoignages(): ReactElement {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true, // Mettez true pour boucler automatiquement
      align: "start",
      skipSnaps: false,
    },
    [Autoplay({ delay: 2000, stopOnInteraction: false })]
  );

  useEffect(() => {
    if (emblaApi) {
      console.log("Embla API initialisée:", emblaApi);
    }
  }, [emblaApi]);

  type temoignage = {
    id: number | string;
    photo: string;
    nom: string;
    poste: string;
    description: string;
  };

  const temoignages: Array<temoignage> = [
  
    {
      id: 2,
      photo: "/images/photo/photo1.jpg",
      nom: "Ansley",
      poste: "Manager",
      description: "Excellente qualité de service",
    },
    {
      id: 3,
      photo: "/images/photo/photo2.jpg",
      nom: "Madocher",
      poste: "CEO",
      description: "Professionnalisme remarquable",
    },
    {
      id: 4,
      photo: "/images/photo/photo3.jpg",
      nom: "Selmo",
      poste: "Directeur Technique",
      description: "Je recommande vivement leurs services",
    },
    {
      id: 5,
      photo: "/images/photo/marie.jpg",
      nom: "Marie",
      poste: "Chef de Projet",
      description: "Toujours à l'écoute de nos besoins",
    },
    {
      id: 6,
      photo: "/images/photo/photo4.jpg",
      nom: "Pierre",
      poste: "Consultant",
      description: "Des résultats au-delà de nos attentes",
    },
  ];

  return (
    <section  id="temoignages" className={styles.section}>
      <div className={styles.conteneur_general}>
        <div className={styles.conteneur_textes}>
          <h2>Témoignages</h2>
          <h3>Ce que les gens disent de nous</h3>
        </div>
        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.embla__container}>
            {temoignages.map((temoignage) => (
              <div className={styles.embla__slide} key={temoignage.id}>
                <div className={styles.temoignage_card}>
                  <div className={styles.photo_conteneur}>
                    <img
                      src={temoignage.photo}
                      alt={temoignage.nom}
                      className={styles.photo}
                    />
                  </div>
                  <div className={styles.contenu}>
                    <h4 className={styles.nom}>{temoignage.nom}</h4>
                    <p className={styles.poste}>{temoignage.poste}</p>
                    <p className={styles.description}>
                      "{temoignage.description}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
