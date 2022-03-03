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
  Reservoires,
  SellModal
} from "../components";

export default function CreatorDashboard() {
  const [open, setOpen] = useState<string | null>(null);

  const { data } = useSWR(
    "{ items { transactionId, price, date, buyer { name, organization, location } } }",
    itemsService.getItems
  );

  const { items } = data || {};

  console.log(data.toString());

  return (
    <FlexRow height="100%">
      <Sidebar onClick={() => setOpen("LIST")} />

      <FlexColumn style={{ padding: "50px", background: "#F9F9F9" }}>
        <Header />
        <Statistic />
        <Table items={items || []} />
      </FlexColumn>

      <FlexColumn width="100%">
        <Reservoires />
      </FlexColumn>

      <SellModal open={open === "LIST"} onClose={() => setOpen(null)} />
    </FlexRow>
  );
}
