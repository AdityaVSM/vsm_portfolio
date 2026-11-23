// Loads Markdown files from this folder at build time.
// Path convention: src/content/<kind>/<slug>.md
const files = import.meta.glob('./*/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;

export type ContentKind = 'experience' | 'projects' | 'writing';

export const getContent = (kind: ContentKind, slug: string): string | undefined => files[`./${kind}/${slug}.md`];

export const hasContent = (kind: ContentKind, slug: string): boolean => getContent(kind, slug) !== undefined;
