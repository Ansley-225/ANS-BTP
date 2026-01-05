import { cache } from "react";
import { prisma } from "../../lib/db";

interface Realisation {
  id: string;
  titre: string;
  slug: string;
  image: string;
  description: string;
  dateDebut?: string | null;
  dateFin?: string | null;
  superficie?: string | null;
  lieu?: string | null;
  client?: string | null;
  status?: string | null;
  difficulté?: string | null;
  solution?: string | null;
}

interface RetourPromise {
  success: boolean;
  data: Realisation | null;
  erreur: string;
  
}

export const recuperationSlug = cache(
  async (slug: string): Promise<RetourPromise> => {
    try {
      const detail = await prisma.realisation.findUnique({ where: { slug } });
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
