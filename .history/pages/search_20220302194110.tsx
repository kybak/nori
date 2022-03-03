import { useState, useEffect, FC } from "react";
import Search from "../components/Search/Search";

const SearchPage: FC = () => {
  const [results, setResults] = useState(null);

  useEffect(() => {}, []); // on mount

  return <Search onSearch={(results: Result[]) => {}}></Search>;
};

export default SearchPage;
