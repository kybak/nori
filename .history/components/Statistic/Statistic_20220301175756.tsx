import React, { useState } from "react";
import styled from "styled-components";
import FlexRow from "../FlexRow";
import FlexColumn from "../FlexColumn";
import colors from "./Colors";

const Container = styled(FlexColumn)`
  position: relative;
  height: 200px;
  width: 300px;
  border-radius: 10px;
  background-image: url(${(props: { background: String }) => props.background});
  background-size: cover;
  margin-right: 20px;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
`;

const Text = styled.span`
  color: ${(props: { color: String }) => props.color};
`;

const Number = styled.span`
  font-size: 3rem;
  font-weight: 500;
  color: ${(props: { color: String }) => props.color};
`;

const Overlay = styled(FlexColumn)`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  position: absolute;
  z-index: 99;
  top: 0;
  left: 0;
  background: rgb(48 48 48 / 71%);
  background: linear-gradient(
    309deg,
    rgba(48, 48, 48, 0.8267682072829132) 0%,
    rgba(34, 34, 34, 0.8015581232492998) 43%,
    rgba(73, 73, 73, 0.5326505602240896) 100%
  );

  animation-name: hover;
  animation-duration: 0.25s;

  svg {
    width: 2.5rem;
    height: 2.5rem;
    color: white;
    opacity: 1;
    animation-name: ease;
    animation-duration: 0.25s;
    transform: translateY(0);
  }

  @keyframes hover {
    from {
      background: rgb(48 48 48 / 0%);
    }
    to {
      background: rgb(48 48 48 / 71%);
    }
  }

  @keyframes ease {
    from {
      opacity: 0;
      transform: translateY(78px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

function Statistic() {
  const [overlay, setOverlay] = useState(null);

  return (
    <FlexRow align="center" justify="space-between" margin="0 0 50px 0">
      {colors.map((u, i) => (
        <Container
          key={i}
          background={u.img}
          onMouseEnter={() => setOverlay(i)}
          onMouseLeave={() => setOverlay(null)}
        >
          {(true || overlay === i) && (
            <Overlay>
              <Number color="white">{u.hoverIcon}</Number>
            </Overlay>
          )}
          <Text color={u.color}>{u.text1}</Text>
          <Number color={u.color}>{u.number}</Number>
          <Text color={u.color}>{u.unit}</Text>
        </Container>
      ))}
    </FlexRow>
  );
}

export default Statistic;
