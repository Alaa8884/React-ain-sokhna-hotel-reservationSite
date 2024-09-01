import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import { device } from "./device";

const StyledAppLayout = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 35rem 1fr;
  grid-template-rows: auto 1fr;
  overflow-y: hidden;

  /* @media ${device.mobileS} {
    grid-template-columns: 15rem 1fr;
  }

  @media ${device.mobileM} {
  }

  @media ${device.mobileL} {
  } */

  @media ${device.mobileL} {
    grid-template-columns: 25rem 1fr;
  }
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
