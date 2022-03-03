import React from "react";
import styled from "styled-components";
import FlexColumn from "../FlexColumn";

const StyledSidebar = styled(FlexColumn)`
  padding-top: 40px;
  width: 100px;
  height: 100vh;
  background: #9fba97;

  svg {
    margin-bottom: 50px;
    color: rgb(103, 126, 96);
    width: 2rem;
    height: 1.75rem;
  }
`;

function Header() {
  return <></>;
}

export default Header;