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
    <div className="flex flex-col w-screen h-screen justify-center items-center">
      <h2
        className="text-2xl font-bold leading-7 text-gray-900 sm:text-2xl sm:truncate"
        style={{ marginRight: "100px", color: "#5C5D66" }}
      >
        Search Your NRT
      </h2>

      <div className="flex flex-row items-center">
        <input
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
        />

        <button
          type="button"
          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={() => {}}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;