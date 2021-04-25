import { useHistory } from "react-router-dom";

export const Page = ({ data, page }) => {
  let history = useHistory();
  const handleClick = id => {
    history.push(`/document/details/${id}`);
  };

  return (
    <div>
      <div>This is page {page}</div>
      {data.map(item => (
        <ul key={item.id}>
          <li key={item.id}>{item.title}</li>
          <button onClick={() => handleClick(item.id)}>
            {item.title} Details
          </button>
        </ul>
      ))}
    </div>
  );
};
