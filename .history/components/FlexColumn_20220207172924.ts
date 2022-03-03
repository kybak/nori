import styled from "styled-components";

interface FlexColumnProps {
  alignItems: String;
  justifyContent: String;
}

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props: FlexColumnProps) => props.alignItems};
  justify-content: ${(props: FlexColumnProps) => props.justifyContent};
`;
