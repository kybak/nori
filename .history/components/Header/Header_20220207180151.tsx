import React from "react";
import styled from "styled-components";
import FlexRow from "../FlexRow";

const StyledSidebar = styled(FlexRow)``;

function Header() {
  return (
    <FlexRow alignItems="center" style={{ marginBottom: "50px" }}>
      <h2
        className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
        style={{ marginRight: "100px" }}
      >
        Good Afternoon, Kyle
      </h2>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </FlexRow>
  );
}

export default Header;
