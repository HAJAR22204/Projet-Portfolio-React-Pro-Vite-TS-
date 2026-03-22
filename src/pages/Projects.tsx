import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section className="grid gap-6 py-8">
      <h2 className="text-3xl font-bold">Mes Projets</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <article key={p.title} className="border rounded-2xl p-5 hover:shadow-md transition">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              {p.period && (
                <span className="text-sm text-muted-foreground">{p.period}</span>
              )}
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span key={tag} className="border rounded-full px-2 py-0.5 text-xs">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-3 text-sm">
              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer" className="underline">
                  Demo
                </a>
              )}
              {p.repo && (
                <a href={p.repo} target="_blank" rel="noreferrer" className="underline">
                  Code source
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}