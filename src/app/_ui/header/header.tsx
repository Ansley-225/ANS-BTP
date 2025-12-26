"use client";
import { useState, useEffect } from "react";
import styles from "@/app/_ui/header/header.module.css";
import Link from "next/link";

export function Header() {
  const [menuOuvert, setMenuOuvert] = useState<boolean>(false);
  const [scrollActif, setScrollActif] = useState<boolean>(false);

  const handleMenuOuvert = (): void => {
    setMenuOuvert(!menuOuvert);
  };

  // Gestion du scroll (existant)
  useEffect(() => {
    const handleScroll = (): void => {
      setScrollActif(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fonction pour fermer le menu lors du clic sur un lien
  const fermerMenu = () => setMenuOuvert(false);

  return (
    <header
      className={`${styles.header} ${scrollActif ? styles.headerScroll : ""}`}
    >
      <div className={styles.conteneur_principal}>
        <Link href="/" onClick={fermerMenu}>
          <div className={styles.logo}></div>
        </Link>
        <nav
          className={`${styles.menu_navigation} ${
            menuOuvert ? styles.menuOuvert : ""
          }`}
        >
          <ul>
          
            <li>
              <Link href="/" onClick={fermerMenu}>
                Acceuil
              </Link>
            </li>
            <li>
              <Link href="/#services" onClick={fermerMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/#realisations" onClick={fermerMenu}>
                Realisations
              </Link>
            </li>
            <li>
              <Link href="/#temoignages" onClick={fermerMenu}>
                Temoignages
              </Link>
            </li>
            <li>
              <Link href="/#contacts" onClick={fermerMenu}>
                Contacts
              </Link>
            </li>
          </ul>
        </nav>

        <div
          className={`${styles.bouton_hamberger} ${
            menuOuvert ? styles.ouvert : ""
          }`}
          onClick={handleMenuOuvert}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
