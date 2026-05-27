import { profile } from "@/content/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <p className="eyebrow">Open to collaboration</p>
        <h2>Build the thing, score the scene, shape the look.</h2>
      </div>
      <div className="footer-links">
        {profile.links.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
      <p className="fine-print">Made by {profile.name}. Built as a living portfolio system.</p>
    </footer>
  );
}
