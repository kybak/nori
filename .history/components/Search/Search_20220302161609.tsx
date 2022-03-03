import { useState, useEffect, FC } from "react";
const { data } = useSWR<{ items: Item[] | [] }>(
  "{ items { transactionId, price, date, buyer { name, organization, location } } }",
  itemsService.getItems
);

const { items } = data || {};

const Search: FC = () => {
  const [state, setState] = useState(null);

  useEffect(() => {}, []); // on mount

  return <></>;
};

export default Search;