import styled from "styled-components";

interface FlexColumnProps {
  align: String;
  justify: String;
  height: String;
  width: String;
  margin: String;
}

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props: FlexColumnProps) => props.align};
  justify-content: ${(props: FlexColumnProps) => props.justify};
  height: ${(props: FlexRowProps) => props.height};
  width: ${(props: FlexRowProps) => props.width};
  margin: ${(props: FlexColumnProps) => props.margin};
`;
