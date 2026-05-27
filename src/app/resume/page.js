import { resumeHighlights } from "@/content/site";

export const metadata = {
  title: "Resume",
  description: "Resume highlights, accomplishments, and PDF download for Israel Olukanni."
};

export default function ResumePage() {
  return (
    <main>
      <section className="page-hero compact">
        <p className="eyebrow">Resume</p>
        <h1>Technical range with a creative operating system.</h1>
        <p>
          A focused snapshot of software development, IT support, music direction, and product thinking. The full PDF is
          available below.
        </p>
        <a className="primary-link" href="/files/IsraelResume.pdf" target="_blank" rel="noreferrer">
          Download PDF
        </a>
      </section>

      <section className="section resume-layout">
        <div className="resume-highlights">
          {resumeHighlights.map((item) => (
            <article key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
        <div className="resume-document">
          <div className="resume-document-header">
            <p className="eyebrow">Resume preview</p>
            <a href="/files/IsraelResume.pdf" target="_blank" rel="noreferrer">
              Open full resume
            </a>
          </div>
          <object className="resume-frame" data="/files/IsraelResume.pdf" type="application/pdf" aria-label="Israel Olukanni resume PDF">
            <div className="resume-fallback">
              <p>The inline PDF preview is unavailable on this browser.</p>
              <a href="/files/IsraelResume.pdf" target="_blank" rel="noreferrer">
                Open the resume PDF
              </a>
            </div>
          </object>
        </div>
      </section>
    </main>
  );
}
