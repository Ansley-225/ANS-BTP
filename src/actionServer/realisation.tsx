"use server";

import { prisma } from "../../lib/db";
type realisation = {
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
};
type recuperationRealisation =
  | {
      success: true;
      data: Array<realisation>;
    }
  | {
      success: false;
      data: null;
      error: string;
    };
export async function RecuperationRealisations(): Promise<recuperationRealisation> {
  let detail = null;
  try {
    detail = prisma.realisation.findMany();
    return { success: true, data: (await detail) as Array<realisation> };
  } catch (e) {
    console.error("erreur server", e);
    return { success: false, data: null, error: "erreur server" };
  }
}
