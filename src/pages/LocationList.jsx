import { Link, useLoaderData } from "react-router";

export const LocationList = () => {
  const { data = [] } = useLoaderData();

  return (
    <div>
      <ul className="grid">
        {data.length === 0 ? (
          <progress />
        ) : (
          data.map((item) => (
            <li key={item.id} className="card">
              <h2>{item.name}</h2>
              <p>Type: {item.type || "Unknown"}</p>
              <p>Dimension: {item.dimension || "Unknown"}</p>
              <Link to={`/locations/${item.id}`}>Go to detail</Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
