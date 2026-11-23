import { PROFILE } from '../data/profile';
import { NAV, homeHref } from './nav';

export const Header = ({ onHome }: { onHome: boolean }) => (
  <header className="nav nav--centre">
    <div className="wrap nav__bar">
      <a className="skip-link" href={onHome ? '#top' : '#main'}>
        Skip to content
      </a>
      <a className="nav__logo" href={onHome ? '#top' : '/'}>
        <span className="mark" data-mark="stack" aria-hidden="true"></span>
        {PROFILE.name}
      </a>
      <nav className="nav__links" aria-label="Main">
        {NAV.map((item) => (
          <div className="nav__item" key={item.id}>
            <a className="nav__link" href={homeHref(item.id, onHome)}>
              {item.label}
            </a>
          </div>
        ))}
      </nav>
      <div className="nav__actions">
        <a className="btn btn--primary" href={`mailto:${PROFILE.links.email}`}>
          Email me
        </a>
      </div>
      <button className="nav__toggle" type="button" aria-expanded="false" aria-label="Menu">
        <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
          <path d="M2 5h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  </header>
);
