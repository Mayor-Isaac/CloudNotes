import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Sidebar from "./Sidebar";
import Header from "./Header";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 22rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100dvh;
`;

const Main = styled.main`
  /* overflow-y: scroll; */
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  border-top: 1px solid var(--color-grey-100);
  border-bottom: 1px solid var(--color-grey-100);
  height: 100%;
`;

export default function AppLayout() {
  return (
    <StyledAppLayout>
      <Sidebar />
      <Header />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}
