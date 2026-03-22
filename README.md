# Portfolio React Pro — Hajar Zegour

## Description

Portfolio professionnel developpé avec Vite, React et TypeScript.
Il presente mon profil, mes projets academiques, ma formation et
mes informations de contact. Le design est sombre et professionnel,
avec une navigation fluide entre les pages grace a React Router.

---

## Technologies utilisees

- Vite + React + TypeScript
- Tailwind CSS v4
- shadcn/ui
- React Router DOM
- Vercel (deploiement)

---

## Structure du projet
```
src/
├── app/
│   ├── router.tsx
│   └── RootLayout.tsx
├── data/
│   ├── profile.ts
│   ├── projects.ts
│   └── education.ts
├── pages/
│   ├── Home.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Education.tsx
│   └── Contact.tsx
├── components/
│   └── ui/
├── index.css
└── main.tsx
```
---

## Pages

### Home
Page d'accueil avec photo de profil circulaire, nom, titre, description,
badges de competences, boutons de navigation et liens vers les reseaux
sociaux. Badge "Disponible pour un stage" affiche sur la photo.

### Projets
Grille de quatre projets academiques avec titre, annee, description,
tags de technologies et lien vers le code source sur GitHub.

### Experience
Timeline verticale presentant le stage PFE en cours de recherche.

### Formation
Timeline verticale avec les trois diplomes : Licence SIR, DEUST MIPC
et Baccalaureat Sciences Mathematiques B.

### Contact
Page avec email cliquable, telephone, localisation et liens vers
GitHub et LinkedIn.

---

## Donnees centralisees

Toutes les informations personnelles sont stockees dans src/data/ :
profile.ts contient le nom, role, email, telephone, competences et
liens sociaux. projects.ts contient les projets avec leurs tags et
descriptions. education.ts contient les diplomes avec les dates et
etablissements.

---

## Design

Le portfolio utilise un theme sombre avec les couleurs suivantes :
fond principal #0f172a, surface des cartes #1e293b, bordures #334155,
texte principal #f1f5f9, texte secondaire #94a3b8 et couleur accent
violet #6366f1. La photo de profil est affichee en cercle avec une
bordure violette et un effet de lueur.

---

## Deploiement

Le projet est deploye sur Vercel avec CI/CD automatique. Chaque push
sur la branche main declenche automatiquement un nouveau deploiement.

---

## Resultats

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/e5e8640d-32e5-4a6f-af4e-3b2218bb7507" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/e0e36004-afb8-496d-a3b9-b3fbe901c684" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/26b6a322-de1a-4e88-8e1e-d9ffa219506d" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/d74f6fe6-f0c3-492e-835e-5d98a7505495" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/af26da26-40c1-4303-a63c-19d7e26fb091" />

