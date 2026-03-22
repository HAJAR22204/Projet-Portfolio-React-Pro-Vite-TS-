export type Project = {
  title: string;
  period?: string;
  tags: string[];
  summary: string;
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Systeme de suivi de produit",
    period: "2024",
    tags: ["Spring Boot", "React.js", "MySQL"],
    summary: "Application web permettant de gerer et suivre des produits via une API REST developpee avec Spring Boot et JPA, avec un frontend interactif en React.js.",
    repo: "https://github.com/HAJAR22204"
  },
  {
    title: "Application de gestion des salles",
    period: "2024",
    tags: ["Java", "Hibernate", "MySQL"],
    summary: "Application Java permettant d'ajouter, modifier, supprimer et rechercher des salles avec gestion de la persistance via Hibernate.",
    repo: "https://github.com/HAJAR22204"
  },
  {
    title: "Application de gestion d'evenements",
    period: "2023",
    tags: ["Java", "JDBC", "Java Swing"],
    summary: "Application desktop avec interface graphique Java Swing pour gerer des evenements avec acces a la base de donnees via JDBC.",
    repo: "https://github.com/HAJAR22204"
  },
  {
    title: "Page web statique",
    period: "2023",
    tags: ["HTML", "CSS", "JavaScript", "Laravel"],
    summary: "Page web responsive realisee avec HTML5, CSS3 et JavaScript, integree dans une structure Laravel.",
    repo: "https://github.com/HAJAR22204"
  }
];