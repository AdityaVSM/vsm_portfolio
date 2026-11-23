import { PROFILE } from '../data/profile';
import { DownloadIcon } from './Icons';

const NAV_ITEMS = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
];

const initials = PROFILE.name
  .split(' ')
  .filter(Boolean)
  .map((part) => part[0])
  .slice(0, 2)
  .join('')
  .toUpperCase();

export const Header = () => (
  <header id="top" className="header">
    <div className="container header-inner">
      <a href="#top" className="brand" aria-label="Back to top">
        {initials}
      </a>
      <nav aria-label="Sections">
        <ul className="nav-list">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <a className="button button-primary button-sm" href={PROFILE.links.resume} download>
        <DownloadIcon width={16} height={16} />
        Resume
      </a>
    </div>
  </header>
);
