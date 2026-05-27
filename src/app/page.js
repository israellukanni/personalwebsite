import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import MusicRelease from "@/components/MusicRelease";
import { featuredProjects, musicReleases, profile, resumeHighlights, styleFinder } from "@/content/site";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-backdrop" />
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Software / sound / style</p>
            <h1>{profile.name}</h1>
            <p>{profile.title}</p>
            <div className="hero-actions">
              <Link href="/work">See the work</Link>
              <Link href="/style-finder">Enter Style Finder</Link>
            </div>
          </div>
          <div className="portrait-panel">
            <Image
              src="/images/professionalprotrait.JPG"
              alt="Portrait of Israel Olukanni"
              width={900}
              height={1200}
              priority
            />
          </div>
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Identity</p>
          <h2>Building useful things with a creative pulse.</h2>
        </div>
        <p className="large-copy">{profile.statement}</p>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Featured work</p>
          <h2>Current projects and shipped prototypes.</h2>
          <Link href="/work">View all work</Link>
        </div>
        <div className="project-grid">
          {featuredProjects.slice(0, 3).map((project, index) => (
            <ProjectCard key={project.title} project={project} featured={index === 0} />
          ))}
        </div>
      </section>

      <section className="section style-cta">
        <p className="eyebrow">Marque product</p>
        <h2>Style Finder is the fashion-tech idea becoming the company.</h2>
        <p>{styleFinder.promise}</p>
        <Link href="/style-finder">See the product direction</Link>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Latest music</p>
          <h2>Released projects, production work, and worship atmospheres.</h2>
          <Link href="/music">Open music catalog</Link>
        </div>
        <MusicRelease release={musicReleases[0]} />
      </section>

      <section className="section highlight-strip">
        {resumeHighlights.map((item) => (
          <article key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
