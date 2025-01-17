import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { BiArchiveIn, BiTrash } from "react-icons/bi";
import Row from "./Row";

const StyledActions = styled.div`
  padding: 1.5rem;
  width: 350px;
`;

export default function Actions() {
  return (
    <StyledActions>
      <Row>
        <Button>
          <BiArchiveIn />
          Archive Note
        </Button>
        <Button>
          <BiTrash />
          Delete Note
        </Button>
      </Row>
    </StyledActions>
  );
}
