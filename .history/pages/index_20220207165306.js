/* pages/creator-dashboard.js */
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from "web3modal";
import useSWR from "swr";

import { marketaddress, nrtaddress } from "../config";

import Market from "../artifacts/contracts/Market.sol/Market.json";
import NRT from "../artifacts/contracts/NRT.sol/NRT.json";
/* 
const fetcher = () => {
  return fetch("/api/items", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({ query })
  })
    .then(res => {
      console.log(res);
      return res.json();
    })
    .then(json => {
      console.log(json);
      return json.data;
    });
}; */

const fetcher = query =>
  fetch("/api/items", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({ query })
  })
    .then(res => res.json())
    .then(json => json.data);

export default function CreatorDashboard() {
  const [nrts, setNrts] = useState([]);
  const [sold, setSold] = useState([]);
  const { data, error } = useSWR("{ items { tokenId } }", fetcher);

  );
}
