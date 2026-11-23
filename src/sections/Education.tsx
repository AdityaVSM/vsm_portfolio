import { Section } from '../components/Section';
import { PROFILE } from '../data/profile';

export const Education = () => (
  <Section id="education" title="Education">
    <ul className="edu-list">
      {PROFILE.education.map((edu) => (
        <li key={edu.school} className="entry-head">
          <div>
            <h3 className="entry-title">{edu.school}</h3>
            <p className="entry-sub">
              {edu.degree}
              {edu.detail && <span className="muted"> · {edu.detail}</span>}
            </p>
          </div>
          <div className="entry-meta">
            <p className="entry-period">{edu.period}</p>
            <p className="muted small">{edu.location}</p>
          </div>
        </li>
      ))}
    </ul>
  </Section>
);
