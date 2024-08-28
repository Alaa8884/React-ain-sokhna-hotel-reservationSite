import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";


const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 42rem;
  align-content: center;
  justify-content: center;
  gap: 2.5rem;
  background-color: var(--color-grey-50);
`;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading as="h4-center">Welcom back</Heading>
      <Heading as="h4-center">Log in to your account</Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
