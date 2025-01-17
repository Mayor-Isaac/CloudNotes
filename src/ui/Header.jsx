import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import Row from "./Row";

import Heading from "./Heading";

const StyledHeader = styled.div`
  padding: 1rem;
  border-bottom: 1px solid var(--color-grey-50);
`;
const StyledFunc = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;
const StyledIcon = styled(HiOutlineCog6Tooth)`
  font-size: 26px;
  cursor: pointer;
`;

const Input = styled.input`
  cursor: pointer;
  width: 6.5rem;
  border-radius: 10px;
  border-width: 1.2px;
  outline: none;
  padding: 0.2rem 1rem;

  &:focus {
    width: 20rem;
  }
`;

export default function Header() {
  // const { allNotes } = useParams();
  // console.log(allNotes);

  return (
    <StyledHeader>
      <Row type="horizontal">
        <Heading>All Notes</Heading>
        <StyledFunc>
          <Input type="text" placeholder="Search" />
          <StyledIcon />
        </StyledFunc>
      </Row>
    </StyledHeader>
  );
}
