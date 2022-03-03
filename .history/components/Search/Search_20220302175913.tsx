import { useState, useEffect, FC } from "react";
import useSWR, { useSWRConfig } from "swr";
import { itemsService } from "../../services";

const Search: FC = () => {
  const [state, setState] = useState(null);

  try {
    const user = await mutate("/api/user", updateUser(newUser));
  } catch (error) {
    // Handle an error while updating the user here
  }

  console.log(data);

  useEffect(() => {}, []);

  return <></>;
};

export default Search;
