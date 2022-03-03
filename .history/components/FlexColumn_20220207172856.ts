import styled from "styled-components";

interface FlexColumnProps {
  alignItems: String;
  justifyContent: String;
}

export default styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${(props: FlexColumn) => props.alignItems};
  justify-content: ${(props: FlexColumn) => props.justifyContent};
`;
