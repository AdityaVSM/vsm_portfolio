import { PROFILE } from '../data/profile';
import { Arrow } from './Arrow';
import { homeHref } from './nav';

export const Footer = ({ onHome }: { onHome: boolean }) => {
  const { links } = PROFILE;
  return (
    <footer className="footer closing g2m" id="contact" aria-labelledby="close-h">
      <div className="wrap">
        <div className="closing__cta close--type">
          <div className="section-head">
            <h2 id="close-h">Email me about a Summer 2027 internship</h2>
            <p>{PROFILE.status}</p>
          </div>
          <a className="btn btn--primary btn--xl btn--wide" href={`mailto:${links.email}`}>
            Email me
            <Arrow />
          </a>
        </div>
        <div className="closing__links">
          <div className="grid">
            <div className="span-4 stack-4">
              <a className="nav__logo" href={onHome ? '#top' : '/'}>
                <span className="mark" data-mark="stack" aria-hidden="true"></span>
                {PROFILE.name}
              </a>
              <p className="footer__lede">Software engineer in {PROFILE.location}.</p>
            </div>
            <div className="span-2 footer__col">
              <h3>Work</h3>
              <ul>
                <li><a href={homeHref('experience', onHome)}>Experience</a></li>
                <li><a href={homeHref('projects', onHome)}>Projects</a></li>
              </ul>
            </div>
            <div className="span-2 footer__col">
              <h3>Background</h3>
              <ul>
                <li><a href={homeHref('skills', onHome)}>Skills</a></li>
                <li><a href={homeHref('education', onHome)}>Education</a></li>
              </ul>
            </div>
            <div className="span-2 footer__col">
              <h3>Profiles</h3>
              <ul>
                <li><a href={links.github} target="_blank" rel="noreferrer">GitHub</a></li>
                <li><a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
              </ul>
            </div>
            <div className="span-2 footer__col">
              <h3>Resume</h3>
              <ul>
                <li><a href={links.resume} download>Download resume</a></li>
              </ul>
            </div>
          </div>
          <div className="footer__legal">
            <span>&copy; 2026 {PROFILE.fullName}. Product names and logos are trademarks of their owners.</span>
            <div className="socials"></div>
            <a className="credits" href="/credits.html">Photographs via Wikimedia Commons</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
