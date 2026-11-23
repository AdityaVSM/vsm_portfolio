import { Section } from '../components/Section';
import { PROFILE } from '../data/profile';

export const Skills = () => (
  <Section id="skills" title="Skills">
    <dl className="skills">
      {Object.entries(PROFILE.skills).map(([category, items]) => (
        <div key={category} className="skill-row">
          <dt className="skill-category">{category}</dt>
          <dd className="skill-items">{items.join(' · ')}</dd>
        </div>
      ))}
    </dl>
  </Section>
);
