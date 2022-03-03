import React from "react";
import styled from "styled-components";
import FlexRow from "../FlexRow";

const StyledSidebar = styled(FlexRow)``;

function Header() {
  return (
    <FlexRow>
      <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
        Back End Developer
      </h2>
    </FlexRow>
  );
}

export default Header;