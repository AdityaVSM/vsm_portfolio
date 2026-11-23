import { useParams } from 'react-router';
import { getContent } from '../content';
import { PROFILE } from '../data/profile';
import { formatDate } from '../utils/date';
import { DetailLayout } from './DetailLayout';
import { NotFound } from './NotFound';

export const PostDetail = () => {
  const { slug = '' } = useParams();
  const post = PROFILE.writing.find((p) => p.slug === slug);
  const body = getContent('writing', slug);
  if (!post || !body) return <NotFound />;

  return (
    <DetailLayout
      back={{ to: '/', label: 'Back to the home page' }}
      eyebrow="Writing"
      title={post.title}
      meta={formatDate(post.date)}
      body={body}
    />
  );
};
