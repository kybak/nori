import useSWR from "swr";
import { Statistic, FlexRow } from "../components";

interface User {
  name: string;
}

const fetcher = (query: string) => {
  return fetch("/api/withdrawal", {
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
    "https://res.cloudinary.com/dm2ctfjv7/image/upload/v1644117447/green_ionztc.png",
    "https://res.cloudinary.com/dm2ctfjv7/image/upload/v1644117447/peach_c4zzcg.png",
    "https://res.cloudinary.com/dm2ctfjv7/image/upload/v1644117447/lavender_sufh2k.png",
    "https://res.cloudinary.com/dm2ctfjv7/image/upload/v1644117447/purple_zbc9qd.png"
  ];

  return (
    <FlexRow alignItems="center">
      {colors.map((color, i) => (
        <Statistic key={i} background={color}></Statistic>
      ))}
    </FlexRow>
  );
}
