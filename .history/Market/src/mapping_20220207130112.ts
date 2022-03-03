import { BigInt } from "@graphprotocol/graph-ts";
import { Market, MarketItemCreated } from "../generated/Market/Market";
import { MarketItem } from "../generated/schema";

export function handleTransfer(event: MarketItemCreated): void {
  const marketItem = new MarketItem(event.params.tokenId.toString());
  marketItem.creator = event.params.to.toHexString();
  marketItem.tokenID = event.params.tokenId;

  let tokenContract = Market.bind(event.address);
  marketItem.contentURI = tokenContract.tokenURI(event.params.tokenId);
  marketItem.tokenIPFSPath = tokenContract.getTokenIPFSPath(
    event.params.tokenId
  );
  marketItem.name = tokenContract.name();
  marketItem.createdAtTimestamp = event.block.timestamp;
  marketItem.owner = event.params.to.toHexString();
  marketItem.save();
}
