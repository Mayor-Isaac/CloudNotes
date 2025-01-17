import React from "react";
import styled from "styled-components";

import Logo from "./Logo";
import NoteType from "./NoteType";
import MainNav from "./MainNav";

const StyledSideBar = styled.div`
  background-color: var(--color-grey-0);
  padding: 1.2rem 1.5rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1/-1;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export default function Sidebar() {
  return (
    <StyledSideBar>
      <Logo />
      <NoteType />
      <MainNav />
    </StyledSideBar>
  );
}
