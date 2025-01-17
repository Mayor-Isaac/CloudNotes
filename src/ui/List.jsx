import React from "react";
import styled from "styled-components";

const StyledItem = styled.div`
  padding: 1rem 0;
  &:not(:last-child) {
    border-bottom: 2px solid var(--color-grey-50);
    cursor: pointer;
  }
`;

const StyledTag = styled.span`
  background-color: var(--color-grey-100);
  padding: 0.5rem;
  border-radius: 4px;
  margin-right: 5px;
  font-size: smaller;

  & + p {
    margin-top: 8px;
  }
`;

export default function List({ item }) {
  const { title, date, tags } = item;
  return (
    <StyledItem>
      <h3>{title}</h3>
      {tags.map((tag) => (
        <StyledTag>{tag}</StyledTag>
      ))}
      <p>{date}</p>
    </StyledItem>
  );
}
