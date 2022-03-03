// import { useEffect, useState } from "react";
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
  PurchaseModal,
  SellModal
} from "../components";

export default function CreatorDashboard() {
  const [open, setOpen] = useState(false);

  const { data } = useSWR(
    "{ items { transactionId, price, date, buyer { name, organization, location } } }",
    itemsService.getItems
  );

  const { items } = data || {};

  return (
    <FlexRow height="100%">
      <Sidebar />

      <FlexColumn style={{ padding: "50px", background: "#F9F9F9" }}>
        <Header />
        <Statistic />
        <Table items={items || []} />
      </FlexColumn>

      <FlexColumn width="100%">
        <Reservoires />
      </FlexColumn>

      <PurchaseModal open={open} />
    </FlexRow>
  );
}
