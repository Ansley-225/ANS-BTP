# 🏗️ ANS-BTP — Site Vitrine Dynamique

Un site vitrine **moderne**, **responsive** et **orienté conversion**, conçu selon une approche **Mobile-First** pour valoriser l'expertise et les réalisations de l'entreprise ANS-BTP.

![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-07405E?logo=sqlite&logoColor=white)

---

## Ce que fait l'application

ANS-BTP est une plateforme vitrine dynamique qui répond à trois enjeux stratégiques :

1. **Visibilité** — Présenter l'entreprise et son catalogue de services de manière professionnelle.
2. **Preuve sociale** — Exposer les réalisations récentes via une galerie dynamique et évolutive.
3. **Conversion** — Transformer les visiteurs en clients grâce à un tunnel de demande de devis simplifié.

---

## Fonctionnalités clés

- 📱 **Mobile-First** — Interface entièrement responsive, optimisée pour smartphone, tablette et desktop.
- 📝 **Demande de devis en ligne** — Formulaire intelligent permettant aux clients de décrire leurs besoins et de recevoir une estimation.
- ⚡ **Performance & SEO** — Structure HTML sémantique et images optimisées pour un référencement naturel efficace.
- 🛠️ **Gestion dynamique des services** — Affichage évolutif des prestations de l'entreprise.
- 🖼️ **Portfolio de réalisations** — Présentation visuelle des chantiers et projets terminés.

---

## Démarrage rapide

### 1. Cloner le dépôt

```bash
git clone https://github.com/Ansley-225/ans-btp.git
cd ans-btp
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Configurer l'environnement

```bash
cp .env.example .env
```

Renseignez ensuite les variables nécessaires dans le fichier `.env` :

```env
DATABASE_URL="file:./dev.db"
# Ajoutez ici toute autre variable requise
```

### 4. Initialiser la base de données

```bash
npx prisma migrate dev
```

### 5. Lancer le projet

```bash
npm run dev
```

L'application est disponible sur [http://localhost:3000](http://localhost:3000).

---

## Structure du projet

```
├── app/
│   ├── page.tsx           # Page d'accueil
│   ├── services/          # Pages des services
│   ├── realisations/      # Galerie des réalisations
│   └── devis/             # Formulaire de devis
├── components/            # Composants réutilisables
├── lib/                   # Utilitaires et configuration Prisma
├── prisma/
│   └── schema.prisma      # Schéma de la base de données
├── public/                # Assets statiques
└── styles/                # CSS Modules
```

---

## Stack technique

| Technologie | Rôle |
|---|---|
| [Next.js](https://nextjs.org/) | Framework fullstack (App Router) |
| [TypeScript](https://www.typescriptlang.org/) | Langage principal |
| [CSS Modules](https://nextjs.org/docs/app/building-your-application/styling/css-modules) | Styles scopés par composant |
| [Prisma](https://www.prisma.io/) | ORM pour la gestion des données |
| [SQLite](https://www.sqlite.org/) | Base de données légère et embarquée |

---

## Comment personnaliser

1. **Modifier les services** — Éditez les données dans la base via Prisma Studio : `npx prisma studio`.
2. **Ajouter des réalisations** — Insérez de nouvelles entrées depuis l'interface d'administration ou directement via Prisma.
3. **Changer le style** — Les styles sont scopés par composant dans les fichiers `.module.css`, modifiables indépendamment.
4. **Étendre le formulaire de devis** — Ajoutez des champs dans le schéma Prisma et mettez à jour le composant correspondant.

---

## Auteur

**Kpi Anselme**
- 📧 [ansley.dev@gmail.com](mailto:ansley.dev@gmail.com)
- 📞 +225 01-730-389-35

---

## Licence

MIT — libre d'utilisation, de modification et de distribution.
