import { useState, useEffect, FC } from "react";
import useSWR from "swr";
import { itemsService } from "../../services";

const Search: FC = () => {
  const [state, setState] = useState(null);

  const { data } = useSWR<{ items: Item[] | [] }>(
    `{ search(id: "5") { transactionId, price, date, buyer { name, organization, location } } }`,
    itemsService.getItems
  );

  useEffect(() => {}, []);

  return <></>;
};

export default Search;
