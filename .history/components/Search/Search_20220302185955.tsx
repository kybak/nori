import { useState, useEffect, FC } from "react";
import useSWR from "swr";
import { itemsService } from "../../services";

const Search: FC = async () => {
  const [state, setState] = useState(null);

  const { data } = useSWR<{ items: Item[] | [] }>(
    `{ items(id: "abc") { transactionId, price, date, buyer { name, organization, location } } }`,
    itemsService.getItems
  );

  useEffect(() => {}, []);

  return <></>;
};

export default Search;
