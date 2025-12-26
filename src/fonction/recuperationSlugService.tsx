import { cache } from "react";
import { prisma } from "../../lib/db";
import {ServiceRealisation } from "@prisma/client";
interface Services {
  id: string;
  titre: string;
  description: string;
  image: string;
  image2: string | null;
  image3: string | null;
  slug: string;
  realisations: ServiceRealisation[];
  realisation_travauxPubilcs: ServiceRealisation[];
  serviceRealisationIngenieries: ServiceRealisation[];

  sousTitre1: string | null;
  detailSoutitre1: string | null;
  sousTitre2: string | null;
  detailSoutitre2: string | null;
  modeEmploie: string | null;
  detailModeEploie1: string | null;
  detailModeEploie2: string | null;
}

interface RetourPromise {
  success: boolean;
  data: Services | null;
  erreur: string;
}
export const recuperationSlug = cache(
  async (slug: string): Promise<RetourPromise> => {
    try {
      const detail = await prisma.service.findUnique({
        where: { slug },
        include: {
          realisations: true,
          realisation_travauxPubilcs: true,
          serviceRealisationIngenieries: true,
        },
      });
      if (!detail) {
        return {
          success: false,
          data: null,
          erreur: "aucun slug existe dans la bd",
        };
      }

      return { success: true, data: detail, erreur: "aucune erreur rencontré" };
    } catch (e) {
      console.error("erreur server", e);
      throw e;
    }
  }
);
