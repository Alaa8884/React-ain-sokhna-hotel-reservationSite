import styled, { css } from "styled-components";
import { device } from "./device";

const Form = styled.form`
  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 2.4rem 3rem;
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 70rem;
      @media ${device.mobileL} {
        width: 100%;
      }
    `}
    
  
  font-size: 1.6rem;
`;

Form.defaultProps = {
  type: "regular",
};
export default Form;
