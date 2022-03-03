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

function Sidebar(props: { onClick: Function }) {
  return (
    <StyledSidebar align="center" onClick={props.onClick}>
      <Icons />
    </StyledSidebar>
  );
}

export default Sidebar;
