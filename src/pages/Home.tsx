import { profile } from "@/data/profile";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="grid gap-8 md:grid-cols-2 items-center py-12">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold">{profile.name}</h1>
        <p className="mt-2 text-xl text-muted-foreground">{profile.role}</p>
        <p className="mt-4 text-muted-foreground">{profile.about}</p>
        <div className="mt-6 flex gap-4">
          <Link to="/projects" className="underline font-medium">Voir mes projets</Link>
          <Link to="/contact" className="underline font-medium">Me contacter</Link>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {profile.skills.map((skill) => (
            <span key={skill} className="border rounded-full px-3 py-1 text-sm">{skill}</span>
          ))}
        </div>
        <div className="mt-6 flex gap-4 text-sm">
          {profile.socials.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="underline">{social.label}</a>
          ))}
        </div>
      </div>
      <div className="aspect-square rounded-2xl border bg-muted flex items-center justify-center text-muted-foreground">
        Photo de profil
      </div>
    </section>
  );
}