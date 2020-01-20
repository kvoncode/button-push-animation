import styled from "styled-components";

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

const damage = () => {
  console.log("damaged");
};

const heal = () => {
  console.log("heal");
};

export const Controls = () => {
  return (
    <StyledControls>
      <StyledButton onClick={heal}>Heal</StyledButton>
      <StyledButton onClick={damage}>Inflict Damage</StyledButton>
    </StyledControls>
  );
};
