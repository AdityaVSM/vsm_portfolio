export const NAV = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
];

// On the home page links jump to its sections; on a detail page they load the home page at that section.
export const homeHref = (id: string, onHome: boolean) => (onHome ? `#${id}` : `/#${id}`);
