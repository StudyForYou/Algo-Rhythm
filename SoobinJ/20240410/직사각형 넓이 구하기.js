function solution(dots) {
  const [xMin, xMax] = [
    ...new Set(dots.map((e) => e[0]).sort((a, b) => a - b)),
  ];
  const [yMin, yMax] = [
    ...new Set(dots.map((e) => e[1]).sort((a, b) => a - b)),
  ];
  return (xMax - xMin) * (yMax - yMin);
}
