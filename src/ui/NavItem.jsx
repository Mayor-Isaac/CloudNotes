import React from 'react'
import styled from "styled-components"

import {
  HiOutlineTag,
} from "react-icons/hi2";

const StyledLi = styled.li`
display : flex;
gap: 1.2rem;
margin: 1.5rem 0;
cursor: pointer;

&:hover{
    font-weight: 700;
    border-bottom: 1px solid black;
}
`

export default function NavItem({item}) {
    
  return (
     <StyledLi><HiOutlineTag/> <p>{item}</p></StyledLi>
           
  )
}
