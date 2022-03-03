import React, { useState } from "react";
import FlexRow from "../FlexRow";

function Search() {
  return (
    <FlexRow
      align="center"
      justify="space-between"
      style={{ marginBottom: "25px" }}
    >
      <b>NRT Transactions</b>

      <FlexRow>
        <input
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
          style={{ marginRight: "10px" }}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
            clipRule="evenodd"
          />
        </svg>
      </FlexRow>
    </FlexRow>
  );
}

export default Search;
