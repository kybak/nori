import styled from "styled-components";

interface Props {
  alignItems: String;
  justifyContent: String;
}

export default styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${(props: Props) => props.alignItems};
  justify-content: ${(props: Props) => props.justifyContent};
`;
