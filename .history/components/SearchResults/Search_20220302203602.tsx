import { useState, FC } from "react";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import useSWR from "swr";
import { itemsService } from "../../services";

const SearchResults: FC = () => {
  const [search, setSearch] = useState<string | null>(null);
  const { loading, results } = useSelector((state: RootState) => state.results);

  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center"></div>
  );
};

export default SearchResults;
