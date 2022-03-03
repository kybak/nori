import { useState, useEffect, FC } from "react";
import useSWR, { useSWRConfig } from "swr";
import { itemsService } from "../../services";

const Search: FC = async () => {
  const [state, setState] = useState(null);

  const { mutate } = useSWRConfig();
  try {
    const user = await mutate("/api/user", itemsService.search(5));
  } catch (error) {
    // Handle an error while updating the user here
  }

  console.log(data);

  useEffect(() => {}, []);

  return <></>;
};

export default Search;
