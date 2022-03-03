import React, { useState } from "react";
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

const LoadingOverlay = styled(FlexColumn)`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background: white;
`;

function Sidebar() {
  const [loading, setLaoding] = useState(false);
  const alert = useAlert();

  return (
    <StyledSidebar
      align="center"
      onClick={() => {
        createNRT()
          .then(tx => {
            console.log(tx);
            alert.success("NRT created successfully!");
          })
          .catch(err => {
            console.error(err);
            alert.error("Error!");
          });
      }}
    >
      <Icons />
      {true && <LoadingOverlay />}
    </StyledSidebar>
  );
}

export default Sidebar;
