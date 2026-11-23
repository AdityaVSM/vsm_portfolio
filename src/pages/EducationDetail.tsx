import { useParams } from 'react-router';
import { Markdown } from '../components/Markdown';
import { getContent } from '../content';
import { PROFILE } from '../data/profile';
import { NotFound } from './NotFound';

// A school's own page: its courses (from profile.ts), then anything written in
// src/content/education/<slug>.md (smaller projects, clubs, experiences, photos).
export const EducationDetail = () => {
  const { slug = '' } = useParams();
  const items = PROFILE.education;
  const index = items.findIndex((e) => e.slug === slug);
  if (index === -1) return <NotFound />;

  const e = items[index];
  const body = getContent('education', slug);
  const other = items.filter((x) => x.slug !== slug);

  return (
    <main id="main" className="detail">
      <title>{`${e.school}: ${e.degree} · ${PROFILE.name}`}</title>
      <article className="wrap">
        <a className="detail__back" href="/#education">
          <span aria-hidden="true">← </span>
          Back to education
        </a>
        <header className="detail__head">
          <p className="t-label">{e.school}</p>
          <h1>{e.degree}</h1>
          <p className="detail__meta">
            {e.period} · {e.location}
            {e.detail ? ` · ${e.detail}` : ''}
          </p>
        </header>
        {e.photo && (
          <figure className="frame frame--photo detail__photo">
            <img
              className="frame__img"
              src={e.photo.src}
              width={e.photo.width}
              height={e.photo.height}
              alt={e.photo.alt}
              data-source={e.photo.source}
              data-subject={e.photo.subject}
            />
          </figure>
        )}
        {e.courses && e.courses.length > 0 && (
          <section className="detail__section" aria-labelledby="courses-h">
            <h2 id="courses-h">Courses</h2>
            <ul className="rows detail__courses">
              {e.courses.map((c) => (
                <li key={c.code}>
                  <span className="rows__name">{c.name}</span>
                  <span className="rows__value">{c.code}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
        {body && <Markdown source={body} />}
        {other.length > 0 && (
          <nav className="detail__pager" aria-label="More">
            {other.map((o) => (
              <a key={o.slug} className="card detail__pager-link" href={`/education/${o.slug}`}>
                <span className="t-label">Also</span>
                <span>{o.school}</span>
              </a>
            ))}
          </nav>
        )}
      </article>
    </main>
  );
};
