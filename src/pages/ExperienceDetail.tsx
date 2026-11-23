import { useParams } from 'react-router';
import { getContent, hasContent } from '../content';
import { PROFILE } from '../data/profile';
import { DetailLayout } from './DetailLayout';
import { NotFound } from './NotFound';

export const ExperienceDetail = () => {
  const { slug = '' } = useParams();
  const items = PROFILE.experience.filter((e) => hasContent('experience', e.slug));
  const index = items.findIndex((e) => e.slug === slug);
  const body = getContent('experience', slug);
  if (index === -1 || !body) return <NotFound />;

  const exp = items[index];
  const link = (i: number) =>
    items[i] && { to: `/experience/${items[i].slug}`, label: `${items[i].role}, ${items[i].shortCompany}` };

  return (
    <DetailLayout
      back={{ to: '/#experience', label: 'Back to experience' }}
      eyebrow={exp.company}
      title={exp.role}
      meta={`${exp.period} · ${exp.location}`}
      tags={exp.tech}
      photo={exp.photo}
      body={body}
      prev={link(index - 1)}
      next={link(index + 1)}
    />
  );
};
