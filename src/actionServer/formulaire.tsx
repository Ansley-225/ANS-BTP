"use server";

import { z } from "zod";
import { prisma } from "../../lib/db";

// Définition du schéma Zod
const formSchema = z.object({
  nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  prenoms: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  email: z.string().email("L'email n'est pas valide"),
  telephone: z.string().min(1, "Le numéro de téléphone est requis"),
  typeService: z.string().min(1, "Veuillez sélectionner un type de service"),
  message: z.string().min(1, "Le message est requis"),
});

// Extraction du type TypeScript à partir du schéma
type FormValues = z.infer<typeof formSchema>;


 export type FormState = {
  success: boolean | null;
  message: string;
  error?: Record<string, string>;
  data?: FormValues | null;
};

export async function EnvoieFormulaire(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const rawData = {
    nom: formData.get("nom"),
    prenoms: formData.get("prenoms"),
    email: formData.get("email"),
    telephone: formData.get("telephone"),
    typeService: formData.get("typeService"),
    message: formData.get("message"),
  };

  const validationData = formSchema.safeParse(rawData);

  try {
if (!validationData.success) {
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
    // Insertion en base de données
    await prisma.contact.create({
      data: validationData.data,
    });



    return {
      success: true,
      error: {},
      message: "Formulaire envoyé avec succès !",
      data: validationData.data,
    };
    
  } catch (error) {
    console.error("Erreur lors de l'envoi du formulaire :", error);
    return {
      success: false,
      error: {
        general: "Une erreur serveur est survenue lors de l'envoi.",
      },
      message: "Erreur lors de l'envoi du formulaire",
      data: null,
    };
  }
}
