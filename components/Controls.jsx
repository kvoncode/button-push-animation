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

export const Controls = () => {
  const damage = () => {
    anime({
      targets: "button",
      translateX: 50,
      rotate: "1turn",
      backgroundColor: "#FFF",
      duration: 4000
    });
    console.log("damaged");
  };

  const heal = () => {
    
    console.log("heal");
  };
  return (
    <StyledControls>
      <StyledButton className="anime-pushpop" onClick={heal}>
        Heal
      </StyledButton>
      <StyledButton className="anime-pushpop" onClick={damage}>
        Inflict Damage
      </StyledButton>
    </StyledControls>
  );
};
