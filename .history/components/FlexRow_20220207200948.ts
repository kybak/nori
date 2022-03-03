import styled from "styled-components";

interface FlexRowProps {
  align: String;
  justify: String;
  width: String;
  height: String;
  margin: String;
}

export default styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${(props: FlexRowProps) => props.align};
  justify-content: ${(props: FlexRowProps) => props.justify};
  height: ${(props: FlexRowProps) => props.height};
  width: ${(props: FlexRowProps) => props.width};
  margin: ${(props: FlexRowProps) => props.margin};
`;
