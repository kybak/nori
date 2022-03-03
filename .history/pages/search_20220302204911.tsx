import { FC } from "react";
import { Search, SearchResults } from "../components";

const SearchPage: FC = () => {
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
      <div className="flex flex-col">
        <Search />
        <SearchResults />
      </div>
    </div>
  );
};

export default SearchPage;
