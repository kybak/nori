import React, { useState } from "react";
import styled from "styled-components";
import { FlexColumn } from "..";

const ProgressContainer = styled.div`
  background: #ececec;
  width: 100%;
  height: 2px;
  border-radius: 6px;
`;

const Progress = styled.div`
  background: ${(props: { color: String }) => props.color};
  width: 50%;
  height: 2px;
  border-radius: 6px;
`;

function Reservoires() {
  return (
    <FlexColumn style={{ flexGrow: "1" }}>
      <ProgressContainer>
        <Progress color="red" />
      </ProgressContainer>
    </FlexColumn>
  );
}

export default Reservoires;
