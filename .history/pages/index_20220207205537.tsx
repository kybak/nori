import { useEffect, useState } from "react";
import useSWR from "swr";
import { itemsService } from "../services";
import {
  FlexRow,
  FlexColumn,
  Table,
  Sidebar,
  Header,
  Statistic,
  Reservoires
} from "../components";

export default function CreatorDashboard() {
  const [loading, setLoading] = useState(true);
  const { data, error } = useSWR(
    "{ items { transactionId, price, date, buyer { name, organization, location } } }",
    itemsService.getItems
  );

  const { items } = data;
  console.log(items);

  return (
    <FlexRow height="100%">
      <Sidebar />

      <FlexColumn style={{ padding: "50px", background: "#F9F9F9" }}>
        <Header />
        <Statistic />
        <Table />
      </FlexColumn>

      <FlexColumn width="100%">
        <Reservoires />
      </FlexColumn>
    </FlexRow>
  );
}
