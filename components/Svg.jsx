const Heart = () => {
  const width = 100;
  const height = 100;

  const viewBoxWidth = 100;
  const viewBoxHeight = 100;

  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="tomato"
        stroke="tomato"
        d="M 10,30
       A 20,20 0,0,1 50,30
       A 20,20 0,0,1 90,30
       Q 90,60 50,90
       Q 10,60 10,30 z"
      />
    </svg>
  );
};

export const Svg = () => {
  return (
    <>
      <Heart></Heart>
      <Heart></Heart>
      <Heart></Heart>
    </>
  );
};
