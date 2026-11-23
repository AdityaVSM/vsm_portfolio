import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const Markdown = ({ source }: { source: string }) => (
  <div className="prose">
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      skipHtml
      components={{
        a: ({ href, children }) => {
          const external = href?.startsWith('http');
          return (
            <a href={href} {...(external && { target: '_blank', rel: 'noreferrer' })}>
              {children}
            </a>
          );
        },
        // no caption under a picture: the alt text describes it for screen readers
        img: ({ src, alt }) => (
          <span className="frame frame--photo prose__photo">
            <img className="frame__img" src={typeof src === 'string' ? src : undefined} alt={alt ?? ''} loading="lazy" />
          </span>
        ),
      }}
    >
      {source}
    </ReactMarkdown>
  </div>
);
