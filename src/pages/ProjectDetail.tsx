import { useParams } from 'react-router';
import { getContent, hasContent } from '../content';
import { PROFILE } from '../data/profile';
import { DetailLayout } from './DetailLayout';
import { NotFound } from './NotFound';

export const ProjectDetail = () => {
  const { slug = '' } = useParams();
  const items = PROFILE.projects.filter((p) => hasContent('projects', p.slug));
  const index = items.findIndex((p) => p.slug === slug);
  const body = getContent('projects', slug);
  if (index === -1 || !body) return <NotFound />;

  const project = items[index];
  const link = (i: number) => items[i] && { to: `/projects/${items[i].slug}`, label: items[i].title };

  return (
    <DetailLayout
      back={{ to: '/#projects', label: 'Back to projects' }}
      eyebrow={project.context ?? 'Project'}
      title={project.title}
      meta={project.links?.map((l, i) => (
        <span key={l.href}>
          {i > 0 && ' · '}
          <a className="link" href={l.href} target="_blank" rel="noreferrer">
            See the code on {l.label}
          </a>
        </span>
      ))}
      tags={project.tech}
      photo={project.photo}
      body={body}
      prev={link(index - 1)}
      next={link(index + 1)}
    />
  );
};
