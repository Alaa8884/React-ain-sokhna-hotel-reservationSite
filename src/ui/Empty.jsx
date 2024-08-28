/* eslint-disable react/prop-types */

import styled from "styled-components";

const EmptyStyled = styled.div`
height: 100vh;
 display: flex;
 align-items: flex-start;
 justify-content: center;
`;
const P = styled.div`
  font-size: 30px;
  font-weight: 600;
`;
function Empty({ resource }) {
  return (
    <EmptyStyled>
      <P>No {resource} could be found.</P>
    </EmptyStyled>
  );
  
}

export default Empty;
