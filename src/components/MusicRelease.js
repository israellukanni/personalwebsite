export default function MusicRelease({ release }) {
  return (
    <article className="release-card">
      <div className="release-copy">
        <p className="eyebrow">{release.type}</p>
        <h3>{release.title}</h3>
        <p>{release.description}</p>
        <p className="release-date">{release.date}</p>
        <div className="tag-row">
          {release.credits.map((credit) => (
            <span key={credit}>{credit}</span>
          ))}
        </div>
        <div className="card-actions">
          {release.links.length ? (
            release.links.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))
          ) : (
            <span>Streaming links ready to add</span>
          )}
        </div>
      </div>
      {release.youtubeEmbed ? (
        <iframe
          className="youtube-frame"
          src={release.youtubeEmbed}
          title={`${release.title} YouTube embed`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <div className="embed-placeholder">
          <span>YouTube embed pending</span>
        </div>
      )}
    </article>
  );
}
