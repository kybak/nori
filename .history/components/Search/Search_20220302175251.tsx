import { useState, useEffect, FC } from "react";
import useSWR from "swr";
import { itemsService } from "../../services";

const Search: FC = () => {
  const [state, setState] = useState(null);

  const { data } = useSWR<{ items: Item[] | [] }>(
    "{ search { id, quantity } } }",
    itemsService.searchItems
  );

  const { items } = data || {};

  useEffect(() => {}, []);

  return <></>;
};

export default Search;
