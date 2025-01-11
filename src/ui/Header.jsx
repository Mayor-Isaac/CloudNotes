import React from 'react'
import styled from "styled-components"
import {
  HiOutlineCog6Tooth,
} from "react-icons/hi2";

import Heading from "./Heading"

const StyledHeader = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 1rem;
border-bottom: 2px solid  var(--color-grey-50);;
`
const StyledFunc = styled.div`
display: flex;
align-items: center;
gap: 1.5rem;

&>*{
  border: 2px solid green;
}
`
const StyledIcon = styled(HiOutlineCog6Tooth)`
font-size: 26px;
cursor: pointer;
`

export default function Header() {
  return (
    <StyledHeader>
        <Heading>All Notes</Heading>
        <StyledFunc>
          <p>Search</p>
          <StyledIcon/>
        </StyledFunc>
    </StyledHeader>
  )
}
