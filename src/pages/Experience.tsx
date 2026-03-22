export default function Experience() {
  const experiences = [
    {
      poste: "Stage PFE — Recherche en cours",
      entreprise: "A definir",
      periode: "2026",
      description: "Stage de Projet de Fin d'Etudes en cours de recherche dans le domaine du developpement logiciel."
    }
  ];

  return (
    <section className="grid gap-6 py-8">
      <h2 className="text-3xl font-bold">Experience</h2>
      <ol className="relative border-l border-muted-foreground/30">
        {experiences.map((exp) => (
          <li key={exp.poste} className="ms-6 pb-8">
            <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border bg-background" />
            <h3 className="font-semibold text-lg">{exp.poste}</h3>
            <p className="text-sm text-muted-foreground">
              {exp.entreprise} — {exp.periode}
            </p>
            <p className="mt-2 text-sm">{exp.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}