import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 200px;
  width: 300px;
  border-radius: 10px;
  background-image: url(${props => props.background});
  background-size: cover;
  margin-right: 20px;
`;

function Statistic(props: { background: any }) {
  const colors = [
    "https://res.cloudinary.com/dm2ctfjv7/image/upload/v1644117447/green_ionztc.png",
    "https://res.cloudinary.com/dm2ctfjv7/image/upload/v1644117447/peach_c4zzcg.png",
    "https://res.cloudinary.com/dm2ctfjv7/image/upload/v1644117447/lavender_sufh2k.png",
    "https://res.cloudinary.com/dm2ctfjv7/image/upload/v1644117447/purple_zbc9qd.png"
  ];

  return <Container background={props.background}></Container>;
}

export default Statistic;
