import React from "react";
import styled from "styled-components";
import Heading from "../../ui/Heading";
import { BiPurchaseTag, BiTime } from "react-icons/bi";

const StyledNote = styled.div`
  padding: 1.5rem;
  border-right: 2px solid var(--color-grey-50);
  width: 100%;
`;
const StyledRow = styled.div`
  display: flex;
  align-items: center;
  padding: 0.8rem 0;
  & > div {
    width: 120px;
  }
`;
const StyledMain = styled.main`
  border-top: 2px solid var(--color-grey-50);
  & > p {
    margin: 15px 0 30px;
  }
`;

export default function NoteDetails() {
  return (
    <StyledNote>
      <Heading>React Performance Optimization</Heading>
      <>
        <StyledRow>
          <div>
            <BiPurchaseTag /> <span>Tags</span>
          </div>
          <p>Dev, React</p>
        </StyledRow>
      </>
      <>
        <StyledRow>
          <div>
            <BiTime /> <span>Last edited</span>
          </div>
          <p>29 Oct 2024</p>
        </StyledRow>
      </>
      <StyledMain>
        <p>Key performance optimization techniques</p>
        <p>
          1.Code Spitting. <br /> - Use React.lazy() for route-based splitting{" "}
          <br /> -Implement dynamic imports heavy components
        </p>
        <p>
          2.Memoization. <br /> - useMemo for expensive calculation <br />{" "}
          -useCallback for function props <br /> -React.memo for component
          optimization
        </p>
        <p>
          2.Virtual List Implementation. <br /> - Use react-window for long
          lists <br />
          -Implement infinite scrolling
        </p>
        <p>TODO: Benchmark current application and identify bottlenecks</p>
      </StyledMain>
    </StyledNote>
  );
}
