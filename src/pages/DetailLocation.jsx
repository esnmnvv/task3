import { useLoaderData } from "react-router";

export const DetailLocation = () => {
  const { data } = useLoaderData();

  return (
    <>
      <h2>{data?.name}</h2>
      <p>Type: {data?.type || "Unknown"}</p>
      <p>Dimension: {data?.dimension || "Unknown"}</p>
    </>
  );
};
