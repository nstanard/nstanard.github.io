import * as React from "react"
import Linkify from "../components/Linkify"
import { contact, summary, experience, education, skills } from "../data/resume"

// Print layout of the resume. scripts/resume-pdf.mjs renders this route to the
// downloadable PDF during `npm run build`. Not linked from the site, noindex.

const styles = `
  @page { size: letter; margin: 34pt 40pt 28pt; }
  html, body { background: #fff !important; margin: 0; padding: 0; height: auto !important; }
  .resume {
    font-family: "Merriweather", Georgia, serif;
    font-weight: 300;
    font-size: 8.5pt;
    font-optical-sizing: none;
    font-variation-settings: "opsz" 18;
    line-height: 1.45;
    color: #2b2f36;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    max-width: 532pt;
    margin: 0 auto;
    padding: 34pt 40pt 28pt;
    box-sizing: content-box;
  }
  @media print { .resume { max-width: none; padding: 0; } }
  .resume h1, .resume h2, .resume h3 { font-family: inherit; }
  .resume a { color: inherit; text-decoration: none; }
  .resume header { text-align: center; padding-bottom: 18pt; border-bottom: 1px solid #d9dde3; }
  .resume h1 { margin: 0; font-size: 17pt; font-weight: 700; color: #1c2a3e; letter-spacing: 0.1pt; line-height: 1.3; }
  .resume .contact { margin-top: 5pt; font-size: 7.5pt; }
  .resume .contact span { display: inline-block; margin: 0 5pt; }
  .resume .contact svg { display: inline-block; width: 7pt; height: 7pt; vertical-align: -0.5pt; margin-right: 3pt; fill: #2b2f36; }
  .resume section { padding-top: 12pt; break-inside: avoid; }
  .resume section + section { border-top: 1px solid #d9dde3; margin-top: 16pt; }
  .resume section.exp { break-inside: auto; }
  .resume h2 {
    margin: 0 0 4pt; padding-bottom: 1pt; break-after: avoid;
    font-size: 10.5pt; font-weight: 700; letter-spacing: 0.3pt; color: #1c2a3e; line-height: 1.5;
    border-bottom: 1px solid #1c2a3e;
  }
  .resume p { margin: 0; }
  .resume .job { break-inside: avoid; }
  .resume .job + .job { margin-top: 10pt; }
  .resume h3 { margin: 0; font-size: 10pt; font-weight: 700; color: #1c2a3e; line-height: 1.3; }
  .resume .meta { display: flex; justify-content: space-between; font-weight: 700; font-size: 8.3pt; color: #1c2a3e; line-height: 1.5; }
  .resume ul { margin: 1pt 0 0; padding: 0; list-style: none; }
  .resume li { position: relative; padding-left: 7pt; }
  .resume li::before { content: "\\2022"; position: absolute; left: 0; top: 0; }
  .resume .sep { margin: 0 4pt; }
  .resume .skills p + p { margin-top: 7pt; }
  .resume .end { border-top: 1px solid #d9dde3; margin-top: 16pt; }
`

const ResumePrintPage = () => (
  <div className="resume">
    <header>
      <h1>{contact.name}</h1>
      <div className="contact">
        <span>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 5h20v14H2zM4 7l8 6 8-6v2l-8 6-8-6z" /></svg>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </span>
        <span>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 1h10a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm0 3v15h10V4zm3 16.5h4v1h-4z" /></svg>
          {contact.phone}
        </span>
        <span>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 2h20v20H2zM6 9h3v9H6zm1.5-4A1.5 1.5 0 1 1 6 6.5 1.5 1.5 0 0 1 7.5 5zM11 9h3v1.3c.5-.9 1.6-1.5 2.8-1.5 2.4 0 3.2 1.5 3.2 3.8V18h-3v-4.6c0-1.2-.3-2-1.4-2s-1.6.8-1.6 2V18h-3z" /></svg>
          <a href={contact.linkedin.href}>{contact.linkedin.label}</a>
        </span>
        <span>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm6.9 9h-3a15 15 0 0 0-1.1-5.2A8 8 0 0 1 18.9 11zM12 4c.9 1.2 1.7 3.4 1.9 7h-3.8c.2-3.6 1-5.8 1.9-7zM9.2 5.8A15 15 0 0 0 8.1 11h-3a8 8 0 0 1 4.1-5.2zM5.1 13h3c.1 1.9.5 3.7 1.1 5.2A8 8 0 0 1 5.1 13zM12 20c-.9-1.2-1.7-3.4-1.9-7h3.8c-.2 3.6-1 5.8-1.9 7zm2.8-1.8c.6-1.5 1-3.3 1.1-5.2h3a8 8 0 0 1-4.1 5.2z" /></svg>
          <a href={contact.website.href}>{contact.website.label}</a>
        </span>
      </div>
    </header>

    <section>
      <h2>SUMMARY</h2>
      <p>{summary}</p>
    </section>

    <section className="exp">
      <h2>EXPERIENCE</h2>
      {experience.map((job) => (
        <div className="job" key={job.company}>
          <h3>{job.position}</h3>
          <div className="meta">
            <span>{job.company}</span>
            <span>{job.period}</span>
          </div>
          <ul>
            <li>{job.description}</li>
            {job.achievements.map((a, i) => (
              <li key={i}><Linkify text={a} /></li>
            ))}
          </ul>
        </div>
      ))}
    </section>

    <section>
      <h2>EDUCATION</h2>
      {education.map((edu) => (
        <div key={edu.school}>
          <h3>{edu.degree}</h3>
          <p>{edu.school}<span className="sep">•</span>{edu.period}</p>
        </div>
      ))}
    </section>

    <section className="skills">
      <h2>SKILLS</h2>
      <p>{skills.technical.join(", ")}</p>
      <p>{skills.tools.join(", ")}</p>
      <p>{skills.soft.join(", ")}</p>
      <div className="end" />
    </section>
  </div>
)

export default ResumePrintPage

export const Head = () => (
  <>
    <title>{`${contact.name} - Software Engineer`}</title>
    <meta name="robots" content="noindex" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link href="https://fonts.googleapis.com/css2?family=Merriweather:opsz,wght@18..144,300..900&display=swap" rel="stylesheet" />
    <style>{styles}</style>
  </>
)
