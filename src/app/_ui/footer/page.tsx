"use client";

import { useState } from "react";
import styles from "./footer.module.css";
import { Newsleatter } from "@/actionServer/newsletter";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    try {
      // Créer un FormData pour l'action serveur
      const formData = new FormData();
      formData.append("email", email);

      // Appeler l'action serveur
      const response = await Newsleatter(formData);

      if (response.success) {
        setMessage({
          type: "success",
          text: response.message,
        });
        setEmail(""); // Réinitialiser le champ email
      } else {
        setMessage({
          type: "error",
          text: response.error?.email || response.message,
        });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "Une erreur inattendue s'est produite",
      });
      console.error("Erreur lors de l'inscription:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Newsletter */}
        <div className={styles.newsletter}>
          <div className={styles.newsletterContent}>
            <div className={styles.newsletterText}>
              <h3 className={styles.newsletterTitle}>Newsletter</h3>
              <p className={styles.newsletterDescription}>
                Recevez nos actualités et conseils en construction
              </p>
            </div>
            <form className={styles.newsletterForm} onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Votre adresse email"
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
              <button
                type="submit"
                className={styles.button}
                disabled={isLoading}
              >
                {isLoading ? "Envoi..." : "S'inscrire"}
              </button>
            </form>
            {/* Message de retour */}
            {message && (
              <p
                style={{
                  marginTop: "10px",
                  color: message.type === "success" ? "#10b981" : "#ef4444",
                  fontSize: "14px",
                }}
              >
                {message.text}
              </p>
            )}
          </div>
        </div>

        <div className={styles.footerContent}>
          {/* À propos */}
          <div className={styles.section}>
            <h3 className={styles.title}>BTP Construction</h3>
            <p className={styles.description}>
              Entreprise de construction et rénovation depuis 30 ans. Nous
              réalisons vos projets avec expertise et qualité.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialIcon}>
                f
              </a>
              <a href="#" className={styles.socialIcon}>
                in
              </a>
              <a href="#" className={styles.socialIcon}>
                ✉
              </a>
            </div>
          </div>

          {/* Services */}
          <div className={styles.section}>
            <h3 className={styles.title}>Nos Services</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <a
                  href="/services/construction-renovation"
                  className={styles.link}
                >
                  Construction & Renovation
                </a>
              </li>
              <li className={styles.listItem}>
                <a href="/services/travaux-publics" className={styles.link}>
                  Travaux Publics
                </a>
              </li>
              <li className={styles.listItem}>
                <a href="/services/ingenierie" className={styles.link}>
                  Ingenierie
                </a>
              </li>
            </ul>
          </div>

          {/* Liens rapides */}
          <div className={styles.section}>
            <h3 className={styles.title}>Liens Rapides</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <a href="/" className={styles.link}>
                  Accueil
                </a>
              </li>
              <li className={styles.listItem}>
                <a href="#apropos" className={styles.link}>
                  À propos
                </a>
              </li>
              <li className={styles.listItem}>
                <a href="#realisations" className={styles.link}>
                  Réalisations
                </a>
              </li>
              <li className={styles.listItem}>
                <a href="#contacts" className={styles.link}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.section}>
            <h3 className={styles.title}>Contact</h3>
            <div className={styles.contactInfo}>
              <span className={styles.icon}>📍</span>
              <span>
                Cocody angré
                <br />
                8e tranche
              </span>
            </div>
            <div className={styles.contactInfo}>
              <span className={styles.icon}>📞</span>
              <span>01-73-03-89-35</span>
            </div>
            <div className={styles.contactInfo}>
              <span className={styles.icon}>✉</span>
              <span>ans-btp@gmail.com</span>
            </div>
            <div className={styles.contactInfo}>
              <span className={styles.icon}>⏰</span>
              <span>Lun - Ven: 8h - 18h</span>
            </div>
          </div>
        </div>

        {/* Bas du footer */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © 2024 BTP Construction. Tous droits réservés.
          </p>
          <div className={styles.legalLinks}>
            <a href="#" className={styles.link}>
              Mentions légales
            </a>
            <a href="#" className={styles.link}>
              Politique de confidentialité
            </a>
            <a href="#" className={styles.link}>
              CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
