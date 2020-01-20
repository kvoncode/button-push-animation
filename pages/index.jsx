import styled from "styled-components";
import Head from "next/head";

import { Circle } from "../components/Circle";
import { HealthBar } from "../components/HealthBar";
import { useState } from "react";
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
  const [health, setHealth] = useState(100);
  return (
    <StyledMain>
      <Head>
        <title>Circle Game</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Alata&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Circle></Circle>
      <HealthBar></HealthBar>
      <Controls></Controls>
    </StyledMain>
  );
};

export default Main;
