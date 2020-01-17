import styled from "styled-components";

const StyledMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  color: ${ ({theme}) => theme.primary};
`;

const Main = () => {
  return <StyledMain>Hello</StyledMain>;
};

export default Main;
