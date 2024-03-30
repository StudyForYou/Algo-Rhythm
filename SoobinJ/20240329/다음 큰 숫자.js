function solution(n) {
  const twoLength = n.toString(2).replaceAll(0, "").length;
  let answer = 0;
  while (true) {
    n++;
    if (n.toString(2).replaceAll(0, "").length === twoLength) {
      answer = n;
      break;
    }
  }
  return answer;
}
