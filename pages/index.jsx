import styled from "styled-components";
import Head from "next/head";
import { Controls } from "../components/Controls";

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
      <Head>
        <title>Button push animation</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Alata&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      
      <Controls></Controls>
    </StyledMain>
  );
};

export default Main;
