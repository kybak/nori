import React, { useState } from "react";
import styled from "styled-components";
import FlexColumn from "../FlexColumn";
import Icons from "./Icons";

const StyledSidebar = styled(FlexColumn)`
  min-width: 100px;
  height: 100vh;
  background: #9fba97;
  padding: 40px;

  svg {
    margin-bottom: 50px;
    color: rgb(103, 126, 96);
    width: 2rem;
    height: 1.75rem;
  }
`;

function Sidebar(props: { onClick: Function }) {
  return (
    <StyledSidebar id="sidebar" align="center" onClick={props.onClick}>
      <Icons />
    </StyledSidebar>
  );
}

export default Sidebar;
