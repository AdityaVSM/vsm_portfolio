import type { ReactNode } from 'react';
import { Markdown } from '../components/Markdown';
import { PROFILE, type Photo } from '../data/profile';

export interface PagerLink {
  to: string;
  label: string;
}

interface DetailLayoutProps {
  back: PagerLink;
  eyebrow: string;
  title: string;
  meta?: ReactNode;
  tags?: string[];
  photo?: Photo;
  body: string;
  prev?: PagerLink;
  next?: PagerLink;
}

// A long-form page (an experience or a project): the article runs as tall as it needs,
// so it is an <article>, not a one-screen section.
export const DetailLayout = ({ back, eyebrow, title, meta, tags, photo, body, prev, next }: DetailLayoutProps) => (
  <main id="main" className="detail">
    <title>{`${title}: ${eyebrow} · ${PROFILE.name}`}</title>
    <article className="wrap">
      <a className="detail__back" href={back.to}>
        <span aria-hidden="true">← </span>
        {back.label}
      </a>
      <header className="detail__head">
        <p className="t-label">{eyebrow}</p>
        <h1>{title}</h1>
        {meta && <p className="detail__meta">{meta}</p>}
        {tags && tags.length > 0 && (
          <ul className="detail__tags" aria-label="Technologies">
            {tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}
      </header>
      {photo && (
        <figure className="frame frame--photo detail__photo">
          <img
            className="frame__img"
            src={photo.src}
            width={photo.width}
            height={photo.height}
            alt={photo.alt}
            data-source={photo.source}
            data-subject={photo.subject}
          />
        </figure>
      )}
      <Markdown source={body} />
      {(prev || next) && (
        <nav className="detail__pager" aria-label="More">
          {prev ? (
            <a className="card detail__pager-link" href={prev.to}>
              <span className="t-label">Previous</span>
              <span>{prev.label}</span>
            </a>
          ) : (
            <span />
          )}
          {next && (
            <a className="card detail__pager-link detail__pager-next" href={next.to}>
              <span className="t-label">Next</span>
              <span>{next.label}</span>
            </a>
          )}
        </nav>
      )}
    </article>
  </main>
);
