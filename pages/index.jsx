import styled from "styled-components";

import { Circle } from "../components/Circle";

const StyledMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  color: ${({ theme }) => theme.primary};
`;

const Main = () => {
  return (
    <StyledMain>
      <Circle></Circle>
    </StyledMain>
  );
};

export default Main;
