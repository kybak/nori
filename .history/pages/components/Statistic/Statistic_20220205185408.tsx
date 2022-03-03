import React, { useState, useEffect } from "react";
import { green, peach, lavender, purple } from "../../../images";
import styled from "styled-components";

const Container = styled.div`
  height: 200px;
  width: 300px;
  border-radius: 10px;
  background: ${props => props.background};
  background-size: cover;
`;

function Statistic(props: object) {
  const [state, setState] = useState(null);

  useEffect(() => {}, []); // on mount

  const colors = [green, peach, lavender, purple];

  return colors.map(color => <Container background={color}></Container>);
}

export default Statistic;
