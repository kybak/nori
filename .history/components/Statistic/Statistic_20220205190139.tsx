import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 200px;
  width: 300px;
  border-radius: 10px;
  background-image: ${props => props.background};
  background-size: cover;
`;

function Statistic(props: { background: any }) {
  const [state, setState] = useState(null);

  useEffect(() => {}, []); // on mount

  return <Container background={props.background}></Container>;
}

export default Statistic;
