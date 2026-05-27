import Image from "next/image";

export default function ProjectCard({ project, featured = false }) {
  const isInternal = project.href?.startsWith("/");
  const hasSecondaryLink = Boolean(project.secondaryHref && project.secondaryLabel);
  const secondaryIsInternal = project.secondaryHref?.startsWith("/");

  return (
    <article className={featured ? "project-card featured" : "project-card"}>
      {project.media && project.mediaType === "image" ? (
        <div className="project-media-shell">
          <Image
            className="project-media project-media-image"
            src={project.media}
            alt={project.mediaAlt || `${project.title} preview`}
            width={960}
            height={600}
          />
        </div>
      ) : null}
      {project.media && project.mediaType !== "image" ? (
        <video className="project-media" controls muted loop playsInline preload="metadata">
          <source src={project.media} type="video/mp4" />
        </video>
      ) : null}
      <div className="project-copy">
        <p className="eyebrow">{project.eyebrow}</p>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="tag-row">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="card-actions">
          <a href={project.href} target={isInternal ? undefined : "_blank"} rel={isInternal ? undefined : "noreferrer"}>
            {project.ctaLabel || (isInternal ? "Explore product" : "View project")}
          </a>
          {hasSecondaryLink ? (
            <a
              href={project.secondaryHref}
              target={secondaryIsInternal ? undefined : "_blank"}
              rel={secondaryIsInternal ? undefined : "noreferrer"}
            >
              {project.secondaryLabel}
            </a>
          ) : null}
          <span>{project.status}</span>
        </div>
      </div>
    </article>
  );
}
