import styled from "styled-components";

interface Props {
  alignItems: String;
  justifyContent: String;
}

export default styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};
`;
