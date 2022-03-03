import React from "react";
import styled from "styled-components";
import FlexColumn from "../FlexColumn";

const StyledSidebar = styled(FlexColumn)`
  width: 100px;
  height: 100vh;
  background: #9fba97;
`;

function Sidebar() {
  return <StyledSidebar />;
}

export default Sidebar;
