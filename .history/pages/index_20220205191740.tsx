import useSWR from "swr";
import { Statistic, FlexRow } from "../components";

interface User {
  name: string;
}

const fetcher = (query: string) => {
  return fetch("/api/graphql", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({ query })
  })
    .then(res => res.json())
    .then(json => json.data);
};

export default function Index() {
  const { data, error } = useSWR("{ users { name } }", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const { users } = data;

  const colors = [
    "https://res.cloudinary.com/dm2ctfjv7/image/upload/v1644117447/green_ionztc.pngg"
  ];

  return (
    <FlexRow alignItems="center">
      {colors.map((color, i) => (
        <Statistic key={i} background={color}></Statistic>
      ))}
      ;
    </FlexRow>
  );
}
