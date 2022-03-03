import React from "react";
import styled from "styled-components";
import FlexColumn from "../FlexColumn";

const StyledSidebar = styled(FlexColumn)`
  padding-top: 40px;
  width: 100px;
  height: 100vh;
  background: #9fba97;

  svg {
    color: rgb(103, 126, 96);
    height: 2rem;
    height: 2rem;
  }
`;

function Sidebar() {
  return (
    <StyledSidebar alignItems="center">
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
          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    </StyledSidebar>
  );
}

export default Sidebar;
