
"use client";

import styles from "./contacts.module.css";
import { EnvoieFormulaire } from "../../../actionServer/formulaire";
import { BiPhoneCall, BiEnvelope, BiMap, BiTime } from "react-icons/bi";
import { useActionState, useEffect, useRef, ReactNode } from "react";
import type { FormState } from "../../../actionServer/formulaire";

interface ContactInfo {
  icon: ReactNode;
  label: string;
  value: string;
}

const CONTACT_INFO: ContactInfo[] = [
  { icon: <BiPhoneCall />, label: "Téléphone", value: "01 73 03 89 35" },
  { icon: <BiEnvelope />, label: "Email", value: "contact@entreprise.com" },
  { icon: <BiMap />, label: "Adresse", value: "123 Avenue Example, Paris" },
  { icon: <BiTime />, label: "Horaires", value: "Lun-Ven: 8h-18h" },
];

const INITIAL_STATE: FormState = {
  success: null,
  error: {},
  message: "",
  data: null,
};

export function Contacts() {
  const [state, formAction, isPending] = useActionState<FormState, FormData>(
    EnvoieFormulaire,
    INITIAL_STATE
  );

  const formRef = useRef<HTMLFormElement>(null);
  const successTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Gestion du succès : reset du formulaire après 3 secondes
  useEffect(() => {
    if (state.success === true) {
      // Scroll vers le message de succès
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

      // Reset après 3 secondes
      successTimeoutRef.current = setTimeout(() => {
        formRef.current?.reset();
      }, 3000);
    }

    return () => {
      if (successTimeoutRef.current) {
        clearTimeout(successTimeoutRef.current);
      }
    };
  }, [state.success]);

  return (
    <section className={styles.section} id="contacts">
      <div className={styles.conteneur_general}>
        {/* Informations de contact */}
        <div className={styles.conteneur_ajouter}>
          <div className={styles.conteneur_textes}>
            <h2>Contactez-nous</h2>
            <h3>Nous sommes à votre écoute pour répondre à tous vos besoins</h3>
          </div>

          <div className={styles.conteneur_icons}>
            {CONTACT_INFO.map((info, index) => (
              <div key={index} className={styles.conteneur_info_icon}>
                <div className={styles.icon}>{info.icon}</div>
                <div className={styles.infos}>
                  <p>{info.label}</p>
                  <p>{info.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Formulaire */}
        <form ref={formRef} action={formAction} className={styles.form}>
          <div className={styles.conteneur_textes}>
            <p>Demander un devis gratuitement</p>
          </div>

          {/* Message de succès */}
          {state.success === true && (
            <div className={styles.success_message} role="alert">
              <div className={styles.success_icon}>✓</div>
              <strong>{state.message}</strong>
              <p>Nous vous recontacterons dans les plus brefs délais.</p>
            </div>
          )}

          {/* Message d'erreur général */}
          {state.success === false && state.message && (
            <div className={styles.error_message} role="alert">
              <strong>{state.message}</strong>
              {state.error?.general && <p>{state.error.general}</p>}
            </div>
          )}

          {/* Champs du formulaire */}
          <div className={styles.conteneur_input}>
            <div className={styles.input}>
              <label htmlFor="nom">Nom *</label>
              <input
                type="text"
                id="nom"
                name="nom"
                placeholder="Dupont"
                required
                aria-invalid={!!state.error?.nom}
                aria-describedby={state.error?.nom ? "nom-error" : undefined}
                disabled={isPending}
              />
              {state.error?.nom && (
                <span id="nom-error" className={styles.error} role="alert">
                  {state.error.nom}
                </span>
              )}
            </div>

            <div className={styles.input}>
              <label htmlFor="prenoms">Prénom *</label>
              <input
                type="text"
                id="prenoms"
                name="prenoms"
                placeholder="Gérard"
                required
                aria-invalid={!!state.error?.prenoms}
                aria-describedby={
                  state.error?.prenoms ? "prenoms-error" : undefined
                }
                disabled={isPending}
              />
              {state.error?.prenoms && (
                <span id="prenoms-error" className={styles.error} role="alert">
                  {state.error.prenoms}
                </span>
              )}
            </div>
          </div>

          <div className={styles.conteneur_input}>
            <div className={styles.input}>
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="exemple@gmail.com"
                required
                aria-invalid={!!state.error?.email}
                aria-describedby={
                  state.error?.email ? "email-error" : undefined
                }
                disabled={isPending}
              />
              {state.error?.email && (
                <span id="email-error" className={styles.error} role="alert">
                  {state.error.email}
                </span>
              )}
            </div>

            <div className={styles.input}>
              <label htmlFor="telephone">Téléphone *</label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                placeholder="01 23 45 67 89"
                required
                aria-invalid={!!state.error?.telephone}
                aria-describedby={
                  state.error?.telephone ? "telephone-error" : undefined
                }
                disabled={isPending}
              />
              {state.error?.telephone && (
                <span
                  id="telephone-error"
                  className={styles.error}
                  role="alert"
                >
                  {state.error.telephone}
                </span>
              )}
            </div>
          </div>

          <div className={styles.input}>
            <label htmlFor="typeService">Type de service *</label>
            <select
              id="typeService"
              name="typeService"
              required
              aria-invalid={!!state.error?.typeService}
              aria-describedby={
                state.error?.typeService ? "typeService-error" : undefined
              }
              disabled={isPending}
            >
              <option value="">-- Sélectionnez un service --</option>
              <option value="construction">Construction</option>
              <option value="renovation">Rénovation</option>
              <option value="travaux-publics">Travaux publics</option>
              <option value="ingenierie">Ingénierie</option>
            </select>
            {state.error?.typeService && (
              <span
                id="typeService-error"
                className={styles.error}
                role="alert"
              >
                {state.error.typeService}
              </span>
            )}
          </div>

          <div className={styles.input}>
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              placeholder="Décrivez votre projet en quelques mots..."
              required
              rows={5}
              aria-invalid={!!state.error?.message}
              aria-describedby={
                state.error?.message ? "message-error" : undefined
              }
              disabled={isPending}
            />
            {state.error?.message && (
              <span id="message-error" className={styles.error} role="alert">
                {state.error.message}
              </span>
            )}
          </div>

          <button
            className={styles.button}
            type="submit"
            disabled={isPending}
            aria-busy={isPending}
          >
            {isPending ? (
              <>
                <span className={styles.spinner} aria-hidden="true" />
                Envoi en cours...
              </>
            ) : (
              "Envoyer ma demande"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}