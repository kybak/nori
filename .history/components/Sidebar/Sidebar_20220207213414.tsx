import React from "react";
import styled from "styled-components";
import FlexColumn from "../FlexColumn";
import Icons from "./Icons";
import createNRT from "./createNRT";
import { useAlert } from "react-alert";

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

function Sidebar() {
  const alert = useAlert();

  return (
    <StyledSidebar
      align="center"
      onClick={() => {
        alert.success("NRT created successfully!");
        return;
        createNRT()
          .then(() => {
            alert.show("NRT created successfully!");
          })
          .catch(err => {
            console.error(err);
            alert.error("Error!");
          });
      }}
    >
      <Icons />
    </StyledSidebar>
  );
}

export default Sidebar;