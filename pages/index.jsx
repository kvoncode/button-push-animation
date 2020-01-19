import styled from "styled-components";

import { Circle } from "../components/Circle";
import { HealthBar } from "../components/HealthBar";

const StyledMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  color: ${({ theme }) => theme.primary};
`;

const Main = () => {
  return (
    <StyledMain>
      <Circle></Circle>
      <HealthBar></HealthBar>
    </StyledMain>
  );
};

export default Main;
