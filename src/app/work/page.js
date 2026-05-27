import ProjectCard from "@/components/ProjectCard";
import { featuredProjects, workbenchNotes } from "@/content/site";

export const metadata = {
  title: "Work",
  description: "Curated software projects, prototypes, GitHub-ready work, and Codex workbench notes."
};

export default function WorkPage() {
  return (
    <main>
      <section className="page-hero compact">
        <p className="eyebrow">Work system</p>
        <h1>Software projects with product taste.</h1>
        <p>
          A curated view of shipped work, active builds, and selected private work. GitHub metadata can enrich these
          cards later through an allowlist without exposing private details by default.
        </p>
      </section>

      <section className="section project-grid">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} featured={index === 0} />
        ))}
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Codex and GitHub intake</p>
          <h2>Prepared for curated automation.</h2>
        </div>
        <div className="note-grid">
          {workbenchNotes.map((note) => (
            <article className="note-card" key={note.title}>
              <p className="eyebrow">{note.kicker}</p>
              <h3>{note.title}</h3>
              <p>{note.summary}</p>
              <ul>
                {note.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
