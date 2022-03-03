import { BigInt } from "@graphprotocol/graph-ts";
import { Market, MarketItemCreated } from "../generated/Market/Market";
import { MarketItem } from "../generated/schema";

export function handleItemCreate(event: MarketItemCreated): void {
  const marketItem = new MarketItem(Date.now().toString());

  // let tokenContract = Market.bind(event.address);
  marketItem.save();
}
