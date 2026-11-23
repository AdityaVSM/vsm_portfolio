import { PROFILE } from '../data/profile';

export const NotFound = () => (
  <main id="main" className="detail">
    <title>{`Page not found · ${PROFILE.name}`}</title>
    <article className="wrap">
      <header className="detail__head">
        <p className="t-label">404</p>
        <h1>This page doesn’t exist</h1>
        <p className="detail__meta">
          <a className="link" href="/">Go to the home page</a>
        </p>
      </header>
    </article>
  </main>
);
