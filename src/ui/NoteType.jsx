import React from "react";
import { NavLink } from "react-router-dom";
import { BiArchiveIn } from "react-icons/bi";
import { HiOutlineHome } from "react-icons/hi2";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    margin-bottom: 1.5rem;
    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;
const StyledNote = styled.div`
  border-bottom: 2px solid var(--color-grey-50);
`;

function NoteType() {
  return (
    <StyledNote>
      <StyledNavLink to="note/allNotes">
        <HiOutlineHome /> All Notes
      </StyledNavLink>
      <StyledNavLink to="note/archive">
        <BiArchiveIn /> Archived Notes
      </StyledNavLink>
    </StyledNote>
  );
}

export default NoteType;
