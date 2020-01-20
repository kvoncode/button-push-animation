import styled from "styled-components";

import anime from "animejs";

const StyledControls = styled.div`
  display: flex;
`;

const StyledButton = styled.button`
  background: tomato;
  margin: 5px;
  width: 100%;
  height: 100%;
  color: white;
  border-radius: 3px;
  border: none;
  font-family: "Alata", sans-serif;
  box-shadow: 1px 2px 1px 1px #ebebeb;

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
`;

const AnimatedButton = props => {
  const animate = e => {
    // console.log(e.target);

    const animeConfig = {
      targets: e.target,

      width: "8rem",
      height: "1.8rem",
      direction: "alternate",
      fontSize: "0.9rem",
      duration: 100
    };

    anime(animeConfig);
  };

  const logMe = () => {
    console.log(props);
  };

  return (
    <ButtonWrapper>
      <StyledButton
        {...props}
        onClick={e => {
          animate(e);
          props.onClick ? props.onClick() : "";
        }}
      ></StyledButton>
    </ButtonWrapper>
  );
};

export const Controls = () => {
  const damage = () => {
    console.log("damaged");
  };

  const heal = () => {
    console.log("heal");
  };

  return (
    <StyledControls>
      <AnimatedButton onClick={heal}>Heal</AnimatedButton>
      <AnimatedButton onClick={damage}>Inflict Damage</AnimatedButton>
      <AnimatedButton>asd</AnimatedButton>
    </StyledControls>
  );
};
