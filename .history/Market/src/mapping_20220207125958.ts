import { BigInt } from "@graphprotocol/graph-ts";
import { Market, MarketItemCreated } from "../generated/Market/Market";
import { MarketItem } from "../generated/schema";

export function handleTransfer(event: MarketItemCreated): void {
  token = new Token(event.params.tokenId.toString());
  token.creator = event.params.to.toHexString();
  token.tokenID = event.params.tokenId;

  let tokenContract = TokenContract.bind(event.address);
  token.contentURI = tokenContract.tokenURI(event.params.tokenId);
  token.tokenIPFSPath = tokenContract.getTokenIPFSPath(event.params.tokenId);
  token.name = tokenContract.name();
  token.createdAtTimestamp = event.block.timestamp;
  token.owner = event.params.to.toHexString();
  token.save();
}
