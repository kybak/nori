import styled from "styled-components";

interface FlexRowProps {
  alignItems: String;
  justifyContent: String;
}

export default styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${(props: FlexRowProps) => props.alignItems};
  justify-content: ${(props: FlexRowProps) => props.justifyContent};
`;
