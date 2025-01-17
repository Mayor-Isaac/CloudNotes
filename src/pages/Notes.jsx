import React from "react";
import List from "../ui/List";
import Button from "../ui/Button";
import styled from "styled-components";
import NoteDetails from "../feature/notes/NoteDetails";

const listData = [
  {
    title: "React Performance Optimization",
    tags: ["Dev", "React"],
    date: "29 Oct 2024",
  },
  {
    title: "Japan Travel Planning",
    tags: ["Travel", "Personal"],
    date: "28 Oct 2024",
  },
  {
    title: "Favourite Pasta Recipes",
    tags: ["Cooking", "Recipes"],
    date: "29 Oct 2024",
  },
  {
    title: "Weekly Workout Plan",
    tags: ["Dev", "React"],
    date: "25 Oct 2024",
  },
  {
    title: "Meal Prep Ideas",
    tags: ["Cooking", "Health", "Recipes"],
    date: "12 Oct 2024",
  },
  {
    title: "Reading List",
    tags: ["Personal", "Dev"],
    date: "05 Oct 2024",
  },
  {
    title: "Fitness Goals 2025",
    tags: ["Fitness", "Health", "Personal"],
    date: "22 Sep 2024",
  },
];

const StyledList = styled.div`
  border-right: 2px solid var(--color-grey-50);
  width: 250px;
  padding: 1.5rem;
`;

export default function Notes() {
  return (
    <>
      <StyledList>
        <Button>+ Create New Note</Button>
        {listData.map((item) => (
          <List item={item} key={item.title} />
        ))}
      </StyledList>
      {/* Select a note by id */}
      <NoteDetails />
    </>
  );
}
