import styled from "styled-components";

import anime from "animejs";

const StyledControls = styled.div`
  display: flex;
`;

const StyledButton = styled.button`
  background: tomato;
  margin: 5px;
  width: 9rem;
  height: 2rem;
  color: white;
  border-radius: 3px;
  border: none;
  font-family: "Alata", sans-serif;

  &:focus {
    outline: 0;
  }
`;

const AnimatedButton = props => {
  const animate = e => {
    // console.log(e.target);

    const animeConfig = {
      targets: e.target,

      rotate: "1turn",
      duration: 2000
    };

    anime(animeConfig);
  };

  const logMe = () => {
    console.log(props);
  };

  return (
    <StyledButton
      {...props}
      onClick={e => {
        props.onClick ? props.onClick() : "";
        animate(e);
      }}
    ></StyledButton>
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
