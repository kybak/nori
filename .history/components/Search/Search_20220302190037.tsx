import { useState, useEffect, FC } from "react";
import useSWR from "swr";
import { itemsService } from "../../services";

const Search: FC = () => {
  const [state, setState] = useState(null);

  const { data } = useSWR<{ items: Item[] | [] }>(
    `{ search(id: "5") { id, quantity } }`,
    itemsService.search
  );

  console.log(data);

  useEffect(() => {}, []);

  return <></>;
};

export default Search;
