export const Films = ({ films }) => {
  if (films.length <= 0) {
    return <></>;
  }

  return (
    <ul>
      {films.map(({ title, director }) => {
        return (
          <li key={title}>
            Name: {title}. Director: {director}
          </li>
        );
      })}
    </ul>
  );
};
