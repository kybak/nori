import React from "react";
import styled from "styled-components";
import FlexRow from "../FlexRow";
import FlexColumn from "../FlexColumn";

const Container = styled(FlexColumn)`
  height: 200px;
  width: 300px;
  border-radius: 10px;
  background-image: url(${(props: { background: String }) => props.background});
  background-size: cover;
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`;

const Text = styled.span``;
const Number = styled.span``;

function Statistic() {
  const colors = [
    {
      img:
        "https://res.cloudinary.com/dm2ctfjv7/image/upload/v1644117447/green_ionztc.png"
    },
    {
      img:
        "https://res.cloudinary.com/dm2ctfjv7/image/upload/v1644117447/peach_c4zzcg.png"
    },
    {
      img:
        "https://res.cloudinary.com/dm2ctfjv7/image/upload/v1644117447/lavender_sufh2k.png"
    },
    {
      img:
        "https://res.cloudinary.com/dm2ctfjv7/image/upload/v1644117447/purple_zbc9qd.png"
    }
  ];

  return (
    <FlexRow align="center" justify="space-between" margin="0 0 50px 0">
      {colors.map((u, i) => (
        <Container key={i} background={u.img}>
          <Text>{u.text1}</Text>
          <Number>{u.number}</Number>
          <Text>{u.text2}</Text>
        </Container>
      ))}
    </FlexRow>
  );
}

export default Statistic;
