import { BigInt } from "@graphprotocol/graph-ts";
import { Market, MarketItemCreated } from "../generated/Market/Market";
import { MarketItem } from "../generated/schema";

export function handleItemCreate(event: MarketItemCreated): void {
  const marketItem = new MarketItem(event.params.tokenId.toString());
  marketItem.id = event.params.itemId.toHexString();
  marketItem.itemId = event.params.itemId;
  marketItem.tokenId = event.params.tokenId;
  marketItem.seller = event.params.seller;
  marketItem.owner = event.params.owner;

  // let tokenContract = Market.bind(event.address);
  marketItem.save();
}
