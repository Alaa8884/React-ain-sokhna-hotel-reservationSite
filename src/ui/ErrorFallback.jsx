/* eslint-disable react/prop-types */
import styled from "styled-components";
import Heading from "./Heading";
import GlobalStyles from "../styles/GlobalStyles";
import Button from "./Button";

const StyledErrorFallback = styled.main`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem;
`;

const Box = styled.div`
  background-color: var(--color-grey-0);
  border: 4px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 4rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 2rem;
  }

  & p {
    font-family: "Sono";
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 3.2rem;
    color: var(--color-brand-800);
  }
  & button {
    color: var(--color-brand-700);
  }
`;

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <>
      <GlobalStyles />
      <StyledErrorFallback>
        <Box>
          <Heading as="h1">Something went wrong 😔</Heading>
          <p>{error.message}</p>
          <p>To return to the homepage please click the button below.</p>
          <Button
            sizes="large"
            onClick={resetErrorBoundary}
            variations="primary"
          >
            Try again
          </Button>
        </Box>
      </StyledErrorFallback>
    </>
  );
}

export default ErrorFallback;
