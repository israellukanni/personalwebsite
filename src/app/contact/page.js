import { profile } from "@/content/site";

export const metadata = {
  title: "Contact",
  description: "Contact Israel Olukanni for software, music, creative technology, and Style Finder opportunities."
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero compact">
        <p className="eyebrow">Contact</p>
        <h1>Let’s talk about the build, the sound, or the style.</h1>
        <p>
          Reach out for software collaborations, music production, creative direction, Style Finder conversations, or
          opportunities where the technical and creative worlds overlap.
        </p>
      </section>

      <section className="section contact-grid">
        <div className="contact-details">
          <p className="eyebrow">Direct</p>
          <h2 className="contact-email">{profile.email}</h2>
          <p>{profile.location}</p>
          <p>{profile.phone}</p>
          <div className="footer-links inline">
            {profile.links.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <form className="contact-form" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden-field">
            <label>
              Do not fill this out: <input name="bot-field" />
            </label>
          </p>
          <label>
            Name
            <input name="name" type="text" required />
          </label>
          <label>
            Email
            <input name="email" type="email" required />
          </label>
          <label>
            Subject
            <input name="subject" type="text" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="7" required />
          </label>
          <button type="submit">Send message</button>
        </form>
      </section>
    </main>
  );
}
