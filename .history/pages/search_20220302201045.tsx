import { useState, useEffect, FC } from "react";
import Search from "../components/Search/Search";

const SearchPage: FC = () => {
  const [results, setResults] = useState(null);

  useEffect(() => {}, []); // on mount

  return;
  <Provider store={createStore(rootReducer)}>
    <Search></Search>
  </Provider>;
};

export default SearchPage;
