import MusicRelease from "@/components/MusicRelease";
import { musicReleases } from "@/content/site";

export const metadata = {
  title: "Music",
  description: "Music releases, DistroKid catalog slots, YouTube embeds, production credits, and worship projects."
};

export default function MusicPage() {
  return (
    <main>
      <section className="page-hero music-hero">
        <p className="eyebrow">Music catalog</p>
        <h1>Atmospheres, production, worship, and release work.</h1>
        <p>
          A home for distributed projects, YouTube embeds, credits, and listening links. Exact DistroKid and streaming
          URLs can be added release by release in the catalog.
        </p>
      </section>

      <section className="section release-stack">
        {musicReleases.map((release) => (
          <MusicRelease key={release.title} release={release} />
        ))}
      </section>
    </main>
  );
}
