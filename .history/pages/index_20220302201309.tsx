import { useState, FC } from "react";
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
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import resultsReducer from "../components/Search/model";

const rootReducer = combineReducers({
  results: resultsReducer
}); // would be in its own file obviously

const CreatorDashboard: FC = () => {
  const [open, setOpen] = useState<string | null>(null);

  const { data } = useSWR<{ items: Item[] | [] }>(
    `{ items { transactionId, price, date, buyer { name, organization, location } } }`,
    itemsService.getItems
  );

  const { items } = data || {};

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
};

export default CreatorDashboard;
