import { ArrowUpRightIcon } from '../components/Icons';
import { Section } from '../components/Section';
import { TagList } from '../components/TagList';
import { PROFILE } from '../data/profile';

export const Projects = () => (
  <Section id="projects" title="Projects">
    <div className="project-list">
      {PROFILE.projects.map((project) => (
        <article key={project.title} className="card">
          <div className="card-head">
            <h3 className="entry-title">{project.title}</h3>
            {project.context && <span className="badge">{project.context}</span>}
          </div>
          <ul className="bullets">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <div className="card-foot">
            <TagList items={project.tech} />
            {project.links && project.links.length > 0 && (
              <div className="card-links">
                {project.links.map((link) => (
                  <a key={link.href} className="text-link" href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                    <ArrowUpRightIcon width={14} height={14} />
                  </a>
                ))}
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  </Section>
);
