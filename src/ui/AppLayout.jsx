import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
 
  
`;

const Main = styled.main`
  padding: 2rem 3rem 2.5rem;
  background-color: var(--color-grey-100);
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 130rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
