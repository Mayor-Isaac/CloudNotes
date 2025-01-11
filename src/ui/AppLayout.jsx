import {Outlet} from "react-router-dom"
import styled from 'styled-components'

import Sidebar from "./Sidebar"
import Header from "./Header"

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 18rem 1fr;
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
  gap: 3.2rem;
  flex-direction: column;
`;


export default function AppLayout() {
  return (
    <StyledAppLayout>
    <Sidebar/>
    <Header/>
    <Main>
        <Container>
    <Outlet/>

        </Container>
    </Main>
    </StyledAppLayout>
  )
}
