function solution(s) {
  const arr = s.split(" ").sort((a, b) => b - a);
  return `${arr.at(-1)} ${arr[0]}`;
}
