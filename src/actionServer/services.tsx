"use server";
import { prisma } from "../../lib/db";

type Service = {
  id: string;
  titre: string;
  slug: string;
  image: string;
  description: string;
};

type recuperationService =
  | { success: true; data: Array<Service> }
  | { success: false; data: null; error: string };

export async function RecuperationServices(): Promise<recuperationService> {
  let services = null;
  try {
    services = await prisma.service.findMany();
    return { success: true, data: services as Array<Service> };
  } catch (e) {
    console.error("erreur de recuperation de données", e);
    return { success: false, data: null, error: "erreur server" };
  }
}
