import { Section } from '../components/Section';
import { TagList } from '../components/TagList';
import { PROFILE } from '../data/profile';

export const Experience = () => (
  <Section id="experience" title="Experience">
    <ol className="timeline">
      {PROFILE.experience.map((exp) => (
        <li key={`${exp.company}-${exp.period}`} className="entry">
          <div className="entry-head">
            <div>
              <h3 className="entry-title">{exp.role}</h3>
              <p className="entry-sub">
                {exp.company} <span className="muted">· {exp.location}</span>
              </p>
            </div>
            <p className="entry-period">{exp.period}</p>
          </div>
          <ul className="bullets">
            {exp.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <TagList items={exp.tech} />
        </li>
      ))}
    </ol>
  </Section>
);
