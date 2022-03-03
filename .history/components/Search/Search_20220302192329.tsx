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

  return (
    <div className="flex-col w-screen h-screen">
      <input
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        type="search"
        name="search"
        placeholder="Search"
        style={{ marginRight: "25px" }}
      />
    </div>
  );
};

export default Search;
