import { PROFILE } from '../data/profile';
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon, PinIcon } from '../components/Icons';

export const Hero = () => {
  const { links } = PROFILE;

  return (
    <section className="hero" aria-labelledby="hero-name">
      {PROFILE.status && (
        <p className="status">
          <span className="status-dot" aria-hidden="true" />
          {PROFILE.status}
        </p>
      )}
      <h1 id="hero-name" className="hero-name">
        {PROFILE.name}
      </h1>
      <p className="hero-title">{PROFILE.title}</p>
      <p className="hero-location">
        <PinIcon width={16} height={16} />
        {PROFILE.location}
      </p>
      <p className="hero-summary">{PROFILE.summary}</p>

      <div className="hero-actions">
        <a className="button button-primary" href={`mailto:${links.email}`}>
          <MailIcon />
          Get in touch
        </a>
        <a className="button" href={links.resume} download>
          <DownloadIcon />
          Download resume
        </a>
        <div className="icon-links">
          <a className="icon-link" href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a className="icon-link" href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
        </div>
      </div>

      {PROFILE.stats.length > 0 && (
        <dl className="stats">
          {PROFILE.stats.map((stat) => (
            <div key={stat.label} className="stat">
              <dt className="stat-label">{stat.label}</dt>
              <dd className="stat-value">{stat.value}</dd>
            </div>
          ))}
        </dl>
      )}
    </section>
  );
};
