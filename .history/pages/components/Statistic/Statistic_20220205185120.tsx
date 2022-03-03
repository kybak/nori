import React, { useState, useEffect } from "react";
import { green, peach, lavender, purple } from "../../../images";
import styled from "styled-components";

const Container = styled.div`
  height: 200px;
  width: 300px;
`;

function Statistic(props: object) {
  const [state, setState] = useState(null);

  useEffect(() => {}, []); // on mount

  return <></>;
}

export default Statistic;
