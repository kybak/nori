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
  const [loading, setLoading] = useState(false);
  const [nrts, setNrts] = useState([]);
  const [sold, setSold] = useState([]);
  const { data, error } = useSWR("{ items { buyer } }", itemsService.getItems);

  console.log(data);

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