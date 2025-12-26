"use client";
import { ReactElement } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import AutoScroll from "embla-carousel-auto-scroll";
import styles from "./carousel.module.css";

export function Carousel(): ReactElement {
  const [emblaRef] = useEmblaCarousel({ loop: true}, [
    AutoScroll({

    }),
  ]);
  return (
    <section className={styles.section}>
      <h1>Il nous fond confience</h1>

      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.embla__container}>
          <div className={styles.embla__slide}>
            <Image
              src="/images/clients/patenaire1.jpg"
              alt="nom de la société"
              fill
              objectFit="cover"
            />
          </div>
          <div className={styles.embla__slide}>
            {" "}
            <Image
              src="/images/clients/patenaire2.jpg"
              alt="nom de la société"
              fill
              objectFit="cover"
            />
          </div>
          <div className={styles.embla__slide}>
            {" "}
            <Image
              src="/images/clients/patenaire3.jpg"
              alt="nom de la société"
              fill
              objectFit="cover"
            />
          </div>
          <div className={styles.embla__slide}>
            {" "}
            <Image
              src="/images/clients/patenaire4.jpg"
              alt="nom de la société"
              fill
              objectFit="cover"
            />
          </div>
          <div className={styles.embla__slide}>
            {" "}
            <Image
              src="/images/clients/patenaire5.png"
              alt="nom de la société"
              fill
              objectFit="cover"
            />
          </div>
          <div className={styles.embla__slide}>
            <Image
              src="/images/clients/patenaire6.png"
              alt="nom de la société"
              fill
              objectFit="contain"
            />
          </div>
          <div className={styles.embla__slide}>
            <Image
              src="/images/clients/patenaire1.jpg"
              alt="nom de la société"
              fill
              objectFit="cover"
            />
          </div>
          <div className={styles.embla__slide}>
            {" "}
            <Image
              src="/images/clients/patenaire2.jpg"
              alt="nom de la société"
              fill
              objectFit="cover"
            />
          </div>
          <div className={styles.embla__slide}>
            {" "}
            <Image
              src="/images/clients/patenaire3.jpg"
              alt="nom de la société"
              fill
              objectFit="cover"
            />
          </div>
          <div className={styles.embla__slide}>
            {" "}
            <Image
              src="/images/clients/patenaire4.jpg"
              alt="nom de la société"
              fill
              objectFit="cover"
            />
          </div>
          <div className={styles.embla__slide}>
            {" "}
            <Image
              src="/images/clients/patenaire5.png"
              alt="nom de la société"
              fill
              objectFit="cover"
            />
          </div>
          <div className={styles.embla__slide}>
            <Image
              src="/images/clients/patenaire6.png"
              alt="nom de la société"
              fill
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
