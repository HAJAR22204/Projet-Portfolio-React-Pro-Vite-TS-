import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section className="grid gap-6 py-8 max-w-lg">
      <h2 className="text-3xl font-bold">Contact</h2>
      <p className="text-muted-foreground">
        N'hesitez pas a me contacter pour toute opportunite de stage ou de collaboration.
      </p>
      <div className="grid gap-4">
        <div className="flex items-center gap-3">
          <span className="font-medium">Email :</span>
          <a href={`mailto:${profile.email}`} className="underline text-muted-foreground">{profile.email}</a>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-medium">Telephone :</span>
          <span className="text-muted-foreground">{profile.phone}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-medium">Localisation :</span>
          <span className="text-muted-foreground">{profile.location}</span>
        </div>
        <div className="flex gap-4 mt-2">
          {profile.socials.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="underline font-medium">{social.label}</a>
          ))}
        </div>
      </div>
    </section>
  );
}