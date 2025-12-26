"use client"
import { ReactElement} from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import React from "react";
import Image from "next/image";
import styles from "./question.module.css";

export function Question(): ReactElement {
  const [expanded, setExpanded] = React.useState<string | false>(false);
   const handleChange =
     (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
       setExpanded(isExpanded ? panel : false);
      
     };
      
  return (
    <section className={styles.section}>
      <h2>Questions fréquente</h2>
      <div className={styles.conteneur_general}>
        <div
          className={styles.conteneur_image} 
        >
          <Image
            alt="image"
            src="/images/pose_question2.jpg"
            fill
            objectFit="cover"
          />
        </div>
        <div
          className={styles.conteneur_arcodeon} >
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontSize={17} fontWeight={700} color="black">
                Comment l'entreprise gère-t-elle la sécurité sur ses chantiers
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="gray">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae nihil nulla, ipsam eos a distinctio quo, molestias
                nisi consequuntur et, vel aliquam? Reiciendis pariatur accusamus
                eum, fuga consectetur quos excepturi!
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* 2eme */}
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontSize={17} fontWeight={700} color="black">
                Quelles sont les stratégies mises en place pour respecter les
                délais et les budgets
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="gray">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquam labore, magnam distinctio mollitia recusandae
                perferendis dicta soluta, earum possimus architecto voluptas
                quod fuga quis animi placeat quam porro. Quae, pariatur?2
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* 3eme */}
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontSize={17} fontWeight={700} color="black">
                Comment l'entreprise intègre-t-elle les enjeux environnementaux
                et les normes de construction durable
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="gray">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae nihil nulla, ipsam eos a distinctio quo, molestias
                nisi consequuntur et, vel aliquam? Reiciendis pariatur accusamus
                eum, fuga consectetur quos excepturi!
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* 4eme */}
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontSize={17} fontWeight={700} color="black">
                Quel est le modèle économique et la santé financière de
                l'entreprise
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="gray">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae nihil nulla, ipsam eos a distinctio quo, molestias
                nisi consequuntur et, vel aliquam? Reiciendis pariatur accusamus
                eum, fuga consectetur quos excepturi!
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* 5eme */}
          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontSize={17} fontWeight={700} color="black">
                Comment sont gérées les relations avec les sous-traitants{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="gray">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae nihil nulla, ipsam eos a distinctio quo, molestias
                nisi consequuntur et, vel aliquam? Reiciendis pariatur accusamus
                eum, fuga consectetur quos excepturi!
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* 6eme */}
          <Accordion
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontSize={17} fontWeight={700} color="black">
                Quels sont les investissements en innovation et en
                digitalisation{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="gray">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                vitae quam labore! Blanditiis aut eaque atque totam inventore
                adipisci alias asperiores, possimus magni voluptate unde, earum
                omnis error sequi rem.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel7"}
            onChange={handleChange("panel7")}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontSize={17} fontWeight={700} color="black">
                Quel est le portefeuille de projets et la spécialisation de
                l'entreprise ?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="gray">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                vitae quam labore! Blanditiis aut eaque atque totam inventore
                adipisci alias asperiores, possimus magni voluptate unde, earum
                omnis error sequi rem.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
