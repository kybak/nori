import styled from "styled-components";

interface FlexRowProps {
  alignItems: String;
  justifyContent: String;
  height: String;
  margin: String;
}

export default styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${(props: FlexRowProps) => props.align};
  justify-content: ${(props: FlexRowProps) => props.justify};
  height: ${(props: FlexRowProps) => props.height};
  margin: ${(props: FlexRowProps) => props.margin};
`;
