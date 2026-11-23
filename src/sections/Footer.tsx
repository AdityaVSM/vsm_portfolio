import { PROFILE } from '../data/profile';

export const Footer = () => (
  <footer className="footer">
    <div className="container footer-inner">
      <div>
        <h2 className="footer-title">Let’s talk</h2>
        <p className="muted">
          {PROFILE.status && `${PROFILE.status}. `}The fastest way to reach me is email.
        </p>
      </div>
      <a className="text-link footer-email" href={`mailto:${PROFILE.links.email}`}>
        {PROFILE.links.email}
      </a>
    </div>
    <div className="container footer-bottom muted small">
      © {new Date().getFullYear()} {PROFILE.name}
    </div>
  </footer>
);
