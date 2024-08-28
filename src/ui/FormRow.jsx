/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 20rem;
  gap: 2.4rem;
  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 2px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  display: block;
  font-size: 1.4rem;
  color: var(--color-red-700);
  flex-grow: 1;
`;

const Mob = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

// eslint-disable-next-line react/prop-types
function FormRow({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      <Mob>
        {children}
        {error && <Error>{error}</Error>}
      </Mob>
    </StyledFormRow>
  );
}

export default FormRow;
