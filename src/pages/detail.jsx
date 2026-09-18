import { useLoaderData } from "react-router";

export function Detail() {
  const { data } = useLoaderData();

  return (
    <>
      <h1>Detail Page</h1>
      <h2>{data?.name}</h2>
      <img src={data?.image} alt={data?.name} width={100} />
      <p>Gender: {data?.gender}</p>
    </>
  );
}
