import type { CSSProperties } from 'react';
import { Arrow } from '../components/Arrow';
import { PROFILE, type Photo } from '../data/profile';

/*
  type: service (site-kind other)
  deal: hero statement (re-dealt: no photograph of Aditya yet), nav nav-centre, close close-type,
        footer footer-columns, rhythm dark-band (projects), buttons arrow, mark stack, grounds none
  moments: word-highlight (#about), pinned-chapters (#experience)
*/

const Img = ({ photo, className }: { photo: Photo; className?: string }) => (
  <img
    className={className}
    src={photo.src}
    width={photo.width}
    height={photo.height}
    alt={photo.alt}
    loading="lazy"
    decoding="async"
    data-source={photo.source}
    data-subject={photo.subject}
  />
);

const Hero = () => (
  <section className="hero hero--statement" data-enter aria-labelledby="hero-h">
    <div className="wrap">
      <div className="hero-text hero__in">
        <div>
          <h1 id="hero-h">{PROFILE.headline}</h1>
          <p className="hero__lead">{PROFILE.lead}</p>
          <div className="btn-row">
            <a className="btn btn--primary" href={`mailto:${PROFILE.links.email}`}>
              Email me
              <Arrow />
            </a>
            <a className="btn btn--secondary" href={PROFILE.links.resume} download>
              Download resume
            </a>
          </div>
        </div>
        <dl className="hero__facts">
          {PROFILE.facts.map((f) => (
            <div key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </section>
);

const Statement = () => (
  <section className="section statement" id="about" data-moment="word-highlight" aria-label="About me">
    <div className="wrap">
      <p className="t-label">About me</p>
      <p className="mo-wh__text">
        {PROFILE.statement.before} <strong>{PROFILE.statement.strong}</strong> {PROFILE.statement.after}
      </p>
    </div>
  </section>
);

const Experience = () => (
  <section
    className="section"
    id="experience"
    style={{ '--h': 2 } as CSSProperties}
    data-moment="pinned-chapters"
    aria-labelledby="experience-h"
  >
    <div className="wrap mo-pc__grid">
      <div className="mo-pc__text">
        <h2 id="experience-h">Software engineering at HPE, Taproots.AI and Samsung</h2>
        <ol className="mo-pc__steps">
          {PROFILE.experience.map((exp) => (
            <li className="mo-pc__step" key={exp.slug}>
              <h3>
                <a className="link" href={`/experience/${exp.slug}`}>
                  {exp.role}, {exp.shortCompany} · {exp.years}
                </a>
              </h3>
              <p>{exp.summary}</p>
              <figure className="mo-pc__visual">
                <Img photo={exp.photo} />
              </figure>
            </li>
          ))}
        </ol>
      </div>
      <div className="mo-pc__visuals frame"></div>
    </div>
  </section>
);

const Projects = () => (
  <section className="section ground-inverse" id="projects" aria-labelledby="projects-h">
    <div className="wrap">
      <div className="section-head">
        <h2 id="projects-h">Software projects from HPE, college and home</h2>
      </div>
      <div className="grid">
        {PROFILE.projects.map((p) => (
          <a className="tile span-4" href={`/projects/${p.slug}`} key={p.slug}>
            <div className="tile__media">
              <Img photo={p.photo} />
            </div>
            <div className="tile__head">
              <h3>{p.title}</h3>
            </div>
            <p>{p.summary}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section className="section" id="skills" aria-labelledby="skills-h">
    <div className="wrap">
      <div className="section-head">
        <h2 id="skills-h">{PROFILE.tools.length} languages, frameworks and tools</h2>
        <p>{PROFILE.alsoSkills}</p>
      </div>
      <div
        className="ic-grid ic-grid--mosaic skills-grid"
        role="img"
        aria-label={`Logos of ${PROFILE.tools.map((t) => t.name).join(', ')}`}
      >
        {PROFILE.tools.map((t) => (
          <div className="ic-cell" key={t.name}>
            <span className="ic-tile ic-tile--40">
              <img
                className={`ic ic-40${t.shape ? ` ic-${t.shape}` : ''}`}
                src={`/assets/icons/${t.icon}`}
                alt=""
                width={t.width}
                height={t.height}
                loading="lazy"
                decoding="async"
              />
            </span>
            <div>
              <div className="ic-cell__name">{t.name}</div>
              <div className="ic-cell__meta">{t.kind}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Education = () => (
  <section className="section" id="education" aria-labelledby="education-h">
    <div className="wrap grid grid--top">
      <div className="span-5">
        <div className="section-head">
          <h2 id="education-h">Computer science and engineering degrees</h2>
          <p>A master’s in computer science now, after a bachelor’s in information science in Bangalore.</p>
        </div>
        <ul className="rows">
          {PROFILE.education.map((e) => (
            <li key={e.school}>
              <span className="rows__name">
                {e.school}
                <small>
                  {e.degree}
                  {e.detail ? `, ${e.detail}` : ''}
                </small>
              </span>
              <span className="rows__value">{e.period}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="span-6 start-7 frame frame--photo edu-photo">
        <Img photo={PROFILE.educationPhoto} className="frame__img" />
      </div>
    </div>
  </section>
);

export const Home = () => (
  <main id="top">
    <Hero />
    <Statement />
    <Experience />
    <Projects />
    <Skills />
    <Education />
  </main>
);
