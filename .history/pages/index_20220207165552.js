/* pages/creator-dashboard.js */
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from "web3modal";
import useSWR from "swr";
import { marketaddress, nrtaddress } from "../config";
import Market from "../artifacts/contracts/Market.sol/Market.json";
import NRT from "../artifacts/contracts/NRT.sol/NRT.json";
import { itemsService } from "../services";

export default function CreatorDashboard() {
  const [nrts, setNrts] = useState([]);
  const [sold, setSold] = useState([]);
  const { data, error } = useSWR(
    "{ items { tokenId } }",
    itemsService.getItems
  );
}
