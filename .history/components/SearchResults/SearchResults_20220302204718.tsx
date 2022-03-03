import { FC } from "react";
import { useSelector } from "react-redux";

const SearchResults: FC = () => {
  const { loading, results } = useSelector((state: RootState) => state.results);

  console.log(results);

  return (
    <div className="flex flex-col">
      {results.map(result => (
        <>
          <div className="flex flex-row max-w-sm rounded overflow-hidden shadow-lg items-center">
            <div className="px-6 py-4">
              <div className="font-bold text-xl">ID: {result.id}</div>
            </div>
            <div className="px-6">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                QTY: {result.quantity}
              </span>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default SearchResults;
