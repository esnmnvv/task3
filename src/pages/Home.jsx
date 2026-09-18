import { Link, useLoaderData } from "react-router";

export const Home = () => {
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
              <img src={item.image} alt={item.name} width={100} />
              <p>Gender: {item.gender}</p>
              <Link to={`/character/${item.id}`}>Go to detail</Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
