import React, { useState } from "react";
import styled from "styled-components";
import { FlexColumn, FlexRow } from "..";

const ProgressContainer = styled.div`
  background: #ececec;
  width: 100%;
  height: 8px;
  border-radius: 6px;
  margin-top: 6px;
`;

const Progress = styled.div`
  background: ${(props: { color: String }) => props.color};
  width: 100%;
  height: 8px;
  border-radius: 20px;
`;
const Container = styled.div`
  margin-bottom: 25px;
  width: 100%;
`;

function Reservoires() {
  return (
    <FlexColumn width="100%" style={{ padding: "25px" }}>
      <h3
        className="text-2xl font-bold leading-5 text-gray-900 sm:text-3xl sm:truncate"
        style={{ color: "rgb(92, 93, 102)" }}
      >
        Carbon Removals
      </h3>
      <Container>
        <FlexRow justify="space-between">
          <span>Zone A Reservoire</span>
          <span>120%</span>
        </FlexRow>
        <ProgressContainer>
          <Progress color="#96B18E" />
        </ProgressContainer>
      </Container>
    </FlexColumn>
  );
}

export default Reservoires;