import React, { useState } from "react";
import styled from "styled-components";
import FlexColumn from "../FlexColumn";
import Icons from "./Icons";

const StyledSidebar = styled(FlexColumn)`
  padding-top: 40px;
  min-width: 100px;
  height: 100vh;
  background: #9fba97;

  svg {
    margin-bottom: 50px;
    color: rgb(103, 126, 96);
    width: 2rem;
    height: 1.75rem;
  }
`;

const LoadingOverlay = styled(FlexColumn)`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background: rgb(255 255 255 / 78%);
  z-index: 99;
  justify-content: center;
  align-items: center;
`;

function Sidebar() {
  return (
    <StyledSidebar align="center" onClick={() => {}}>
      <Icons />
    </StyledSidebar>
  );
}

export default Sidebar;
