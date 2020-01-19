import styled from "styled-components";

const StyledHealthBar = styled.div`
  margin: 1rem;
`;

export const HealthBar = () => {
  const width = 100;
  const height = 10;

  const viewBoxWidth = 100;
  const viewBoxHeight = 10;
  return (
    <StyledHealthBar>
      <svg
        width={`${width}`}
        height={`${height}`}
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="0" y1="0" x2="100" y2="0" stroke="red" strokeWidth="10" />
        <line x1="0" y1="0" x2="100" y2="0" stroke="tomato" strokeWidth="10" />
      </svg>
    </StyledHealthBar>
  );
};
