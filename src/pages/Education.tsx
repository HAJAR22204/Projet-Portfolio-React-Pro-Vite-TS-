import { education } from "@/data/education";

export default function Education() {
  return (
    <section className="grid gap-6 py-8">
      <h2 className="text-3xl font-bold">Formation</h2>
      <ol className="relative border-l border-muted-foreground/30">
        {education.map((e) => (
          <li key={e.school + e.start} className="ms-6 pb-8">
            <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border bg-background" />
            <h3 className="font-semibold text-lg">
              {e.degree} {e.field ? `— ${e.field}` : ""}
            </h3>
            <p className="text-sm text-muted-foreground">
              {e.school}
            </p>
            <p className="text-sm text-muted-foreground">
              {e.start} {e.end ? `— ${e.end}` : ""} {e.location ? `• ${e.location}` : ""}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}