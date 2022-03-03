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
  animation-name: hover;
  animation-duration: 0.25s;

  svg {
    width: 2.5rem;
    height: 2.5rem;
    color: white;
    opacity: 1;
    animation-name: ease;
    animation-duration: 0.25s;
    transform: translateY(78px);
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
      transform: translateY(0);
    }
    to {
      opacity: 1;
      transform: translateY(78px);
    }
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
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z"
            clipRule="evenodd"
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
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
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
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
            clipRule="evenodd"
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
          {overlay === i && (
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
