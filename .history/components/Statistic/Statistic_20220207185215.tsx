import React, { useState } from "react";
import styled from "styled-components";
import FlexRow from "../FlexRow";
import FlexColumn from "../FlexColumn";

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

  svg {
    width: 2.5rem;
    height: 2.5rem;
  }

  div {
    background: radial-gradient(
      circle,
      rgba(0, 0, 0, 0.46262254901960786) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;

function Statistic() {
  const [overlay, setOverlay] = useState(null);

  const colors = [
    {
      text1: "Next Verification Due",
      unit: "March",
      number: "18",
      color: "#467C33",
      hoverIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
          />
        </svg>
      ),
      img:
        "https://res.cloudinary.com/dm2ctfjv7/image/upload/v1644117447/green_ionztc.png"
    },
    {
      text1: "NRT Score",
      unit: "Score",
      number: "60",
      color: "#C06E11",
      hoverIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
          />
        </svg>
      ),
      img:
        "https://res.cloudinary.com/dm2ctfjv7/image/upload/v1644117447/peach_c4zzcg.png"
    },
    {
      text1: "Unrestricted Tokens",
      unit: "Tokens",
      number: "5,832",
      color: "#6B3F75",
      hoverIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
          />
        </svg>
      ),
      img:
        "https://res.cloudinary.com/dm2ctfjv7/image/upload/v1644117447/lavender_sufh2k.png"
    },
    {
      text1: "Restricted Tokens",
      unit: "Tokens",
      number: "500,000",
      color: "#793B39",
      hoverIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
          />
        </svg>
      ),
      img:
        "https://res.cloudinary.com/dm2ctfjv7/image/upload/v1644117447/purple_zbc9qd.png"
    }
  ];

  return (
    <FlexRow align="center" justify="space-between" margin="0 0 50px 0">
      {colors.map((u, i) => (
        <Container
          key={i}
          background={u.img}
          onMouseEnter={() => setOverlay(i)}
          onMouseLeave={() => setOverlay(null)}
        >
          {true && (
            <Overlay>
              <Number color="white">
                <div>{u.hoverIcon}</div>
              </Number>
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
