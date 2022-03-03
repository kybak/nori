import { useState, useEffect, FC } from "react";
import useSWR from "swr";
import { itemsService } from "../../services";

const Search: FC = () => {
  const [state, setState] = useState(null);

  const { data } = useSWR<{ items: Item[] | [] }>(
    `{ search(quantity: 5) { id, quantity } }`,
    itemsService.search
  );

  useEffect(() => {}, []);

  return <></>;
};

export default Search;
