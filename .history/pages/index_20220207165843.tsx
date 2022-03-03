import { useEffect, useState } from "react";
import useSWR from "swr";
import { itemsService } from "../services";

export default function CreatorDashboard() {
  const [nrts, setNrts] = useState([]);
  const [sold, setSold] = useState([]);
  const { data, error } = useSWR(
    "{ items { tokenId } }",
    itemsService.getItems
  );

  return <></>;
}
