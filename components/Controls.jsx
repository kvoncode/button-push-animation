import styled from "styled-components";

import anime from "animejs";
import { useEffect } from "react";

const StyledControls = styled.div`
  display: flex;
`;

const StyledButton = styled.button`
  background: tomato;
  width: 9rem;
  height: 2rem;
  color: white;
  border-radius: 3px;
  border: none;
  font-family: "Alata", sans-serif;
  box-shadow: 1px 2px 0px 1px #e8e8e8;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: 0;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 9rem;
  height: 2rem;
  margin: 0.5rem;
`;

const AnimatedButton = props => {
  const targetRef = React.createRef();
  const timelineParams = { direction: "alternate", duration: 90 };
  let timeline;

  // attaching target to animation
  useEffect(() => {
    timeline = anime.timeline(timelineParams); // this line request "window" object, so should use inside useEffect
    console.log(targetRef.current);
    timeline.add({
      targets: targetRef.current,
      scale: 0.9
    });
  }, []);

  const animate = () => {
    console.log("entered animate()");
    timeline.restart();
    console.log("animate() finished");
  };

  return (
    <ButtonWrapper>
      <StyledButton
        ref={targetRef}
        {...props}
        onClick={e => {
          animate();
          props.onClick ? props.onClick() : "";
        }}
      ></StyledButton>
    </ButtonWrapper>
  );
};

export const Controls = () => {
  return (
    <StyledControls>
      <AnimatedButton>Button 1</AnimatedButton>
      <AnimatedButton>Button 2</AnimatedButton>
    </StyledControls>
  );
};
