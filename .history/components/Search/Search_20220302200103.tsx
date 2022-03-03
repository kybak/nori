import { useState, FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import useSWR from "swr";
import { itemsService } from "../../services";

const Search: FC = () => {
  const [search, setSearch] = useState<string | null>(null);
  const { loading, results } = useSelector<{
    results: { loading: boolean; results: any };
  }>(({ results }) => results);
  const dispatch = useDispatch();
  const { data } = useSWR<{ items: Item[] | [] }>(
    `{ search(quantity: ${search}) { id, quantity } }`,
    itemsService.search
  );

  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
      <div>
        <h2
          className="text-2xl font-bold leading-7 text-gray-900 sm:text-2xl sm:truncate mb-2"
          style={{ marginRight: "100px", color: "#5C5D66" }}
        >
          Search Your NRT
        </h2>

        <div className="flex flex-row items-center">
          <input
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Enter a quantity"
            onChange={e => setSearch(e.target.value)}
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
    </div>
  );
};

export default Search;
