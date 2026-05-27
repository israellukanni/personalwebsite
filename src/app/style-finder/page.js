import Image from "next/image";
import Link from "next/link";
import { styleFinder } from "@/content/site";

export const metadata = {
  title: "Style Finder",
  description:
    "A dedicated product page for Style Finder, Israel Olukanni's fashion-tech product for style discovery and outfit generation.",
  openGraph: {
    title: "Style Finder",
    description: "Fashion intelligence for closets, outfits, and personal style discovery.",
    images: ["/images/csproj.png"]
  }
};

export default function StyleFinderPage() {
  return (
    <main>
      <section className="product-hero">
        <div className="product-copy">
          <p className="eyebrow">Style Finder</p>
          <h1>Fashion intelligence for the closet you already own.</h1>
          <p>{styleFinder.promise}</p>
          <div className="hero-actions">
            <a href="https://stylefinder.netlify.app/" target="_blank" rel="noreferrer">
              Open live site
            </a>
            <Link href="/work">See more work</Link>
          </div>
        </div>
        <video className="product-video" controls muted loop playsInline preload="metadata">
          <source src="/files/stylefinder.mp4" type="video/mp4" />
        </video>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Product thesis</p>
          <h2>Style should feel personal before it feels performative.</h2>
        </div>
        <div className="pillar-list">
          {styleFinder.pillars.map((pillar) => (
            <p key={pillar}>{pillar}</p>
          ))}
        </div>
      </section>

      <section className="section product-gallery-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Product visuals</p>
            <h2>Real screens from the Style Finder ecosystem.</h2>
          </div>
        </div>
        <div className="product-gallery">
          {styleFinder.gallery.map((image) => (
            <figure className="gallery-card" key={image.src}>
              <Image src={image.src} alt={image.alt} width={1200} height={780} />
              <figcaption>{image.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section roadmap">
        <p className="eyebrow">Roadmap</p>
        <h2>From prototype to company-facing product.</h2>
        <div className="roadmap-grid">
          {styleFinder.roadmap.map((item, index) => (
            <article key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section waitlist" id="waitlist">
        <p className="eyebrow">Early interest</p>
        <h2>Want to follow Style Finder as it grows?</h2>
        <form name="style-finder-interest" method="POST" data-netlify="true" netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="style-finder-interest" />
          <p className="hidden-field">
            <label>
              Do not fill this out: <input name="bot-field" />
            </label>
          </p>
          <input name="name" type="text" placeholder="Name" required />
          <input name="email" type="email" placeholder="Email" required />
          <textarea name="message" rows="4" placeholder="What part of style or closets do you want help with?" />
          <button type="submit">Send interest</button>
        </form>
      </section>
    </main>
  );
}
