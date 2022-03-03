import React from "react";
import styled from "styled-components";
import FlexColumn from "../FlexColumn";
import Icons from "./Icons";

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
      <Icons />
    </StyledSidebar>
  );
}

export default Sidebar;
