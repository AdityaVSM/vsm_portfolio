interface TagListProps {
  items: string[];
  label?: string;
}

export const TagList = ({ items, label = 'Technologies' }: TagListProps) => (
  <ul className="tags" aria-label={label}>
    {items.map((item) => (
      <li key={item} className="tag">
        {item}
      </li>
    ))}
  </ul>
);
