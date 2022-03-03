import { useEffect, useState } from "react";
import useSWR from "swr";
import { itemsService } from "../services";
import { FlexRow, FlexColumn, Table, Sidebar, Header } from "../components";

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

      <FlexColumn>
        <Header />
        <Table />
      </FlexColumn>
    </FlexRow>
  );
}
