import styled from "styled-components";

import { Svg } from "../components/Svg";

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
      <Svg></Svg>
    </StyledMain>
  );
};

export default Main;
