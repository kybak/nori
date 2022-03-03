import { useEffect, useState } from "react";
import useSWR from "swr";
import { itemsService } from "../services";
import { FlexRow, Table, Sidebar } from "../components";

export default function CreatorDashboard() {
  const [loading, setLoading] = useState(false);
  const [nrts, setNrts] = useState([]);
  const [sold, setSold] = useState([]);
  const { data, error } = useSWR(
    "{ items { tokenId } }",
    itemsService.getItems
  );

  return (
    <FlexRow height="100%">
      <Sidebar />
      <Table />
    </FlexRow>
  );
}