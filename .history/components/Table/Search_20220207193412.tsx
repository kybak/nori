import React, { useState } from "react";
import FlexRow from "../FlexRow";

function Search() {
  return (
    <FlexRow align="center" justify="space-between">
      <b style={{ marginBottom: "25px" }}>NRT Transactions</b>

      <input
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        type="search"
        name="search"
        placeholder="Search"
      />
    </FlexRow>
  );
}

export default Search;
