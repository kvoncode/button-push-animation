import styled from "styled-components";

const StyledControls = styled.div`
  display: flex;
`;

const StyledButton = styled.button`
  background: tomato;
  margin: 5px;
  width: 10rem;
  height: 2rem;
  color: white;
  border-radius: 3px;
  border: none;
`;

export const Controls = () => {
  return (
    <StyledControls>
      <StyledButton>Heal</StyledButton>
      <StyledButton>Inflict Damage</StyledButton>
    </StyledControls>
  );
};
