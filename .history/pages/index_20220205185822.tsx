import useSWR from "swr";
import { green, peach, lavender, purple } from "../images";
import { Statistic } from "./components";

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

  const colors = [green, peach, lavender, purple];

  return (
    <div>
      {colors.map(color => (
        <Statistic background={color}></Statistic>
      ))}
      ;
    </div>
  );
}
