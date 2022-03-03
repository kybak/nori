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
      <h4
        className="font-medium leading-tight text-2xl mt-0 mb-2"
        style={{ marginBottom: "25==px" }}
      >
        Carbon Removals
      </h4>

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
