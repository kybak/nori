import React from "react";
import styled from "styled-components";
import FlexColumn from "../FlexColumn";

const StyledSidebar = styled(FlexColumn)`
  width: 50px;
  height: 100%;
  background: #9fba97;
`;

function Sidebar(props) {
  return <StyledSidebar />;
}

export default Sidebar;
