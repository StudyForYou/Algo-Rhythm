function solution(dots) {
  const width = Math.max(dots[0][0], dots[1][0], dots[2][0], dots[3][0]) - Math.min(dots[0][0], dots[1][0], dots[2][0], dots[3][0])
  const height = Math.max(dots[0][1], dots[1][1], dots[2][1], dots[3][1]) - Math.min(dots[0][1], dots[1][1], dots[2][1], dots[3][1])
  return width * height;
}