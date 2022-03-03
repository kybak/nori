import { FC } from "react";
import { useSelector } from "react-redux";

const SearchResults: FC = () => {
  const { loading, results } = useSelector((state: RootState) => state.results);

  console.log(results);

  return <div className="flex flex-col"></div>;
};

export default SearchResults;
