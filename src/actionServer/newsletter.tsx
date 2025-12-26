"use server";

import { prisma } from "../../lib/db";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("L'adresse email n'est pas valide"),
});

type FormValues = z.infer<typeof schema>;

export type NewsleatterResponse = {
  success: boolean;
  message: string;
  error?: Record<string, string>;
  data?: FormValues | null;
};

// 3. Fonction principale
export async function Newsleatter(
  formData: FormData
): Promise<NewsleatterResponse> {
  // Extraction des données du formulaire
  const rawData = {
    email: formData.get("email"),
  };

  // Validation avec Zod
  const validationData = schema.safeParse(rawData);

  if (!validationData.success) {
    // Transformation des erreurs Zod en objet simple { champ: message }
    const errors = Object.entries(
      validationData.error.flatten().fieldErrors
    ).reduce((acc, [key, messages]) => {
      acc[key] = messages?.[0] || "Erreur de validation";
      return acc;
    }, {} as Record<string, string>);

    return {
      success: false,
      error: errors,
      message: "Erreur de validation des données",
      data: null,
    };
  }

  try {
    // Insertion dans la base de données
    await prisma.newsleatter.create({
      data: validationData.data,
    });

    return {
      success: true,
      message: "Inscription réussie à la newsletter !",
      data: validationData.data,
    };
  } catch (error) {
    console.error("Erreur Prisma :", error);
    return {
      success: false,
      error: { general: "L'email est peut-être déjà inscrit." },
      message: "Une erreur serveur est survenue.",
      data: null,
    };
  }
}
