function solution(sides) {
  var answer = 0;

  let M = Math.max(sides[0], sides[1]);
  let N = Math.min(sides[0], sides[1]);

  answer = (M + N) - (M - N) - 1;

  return answer;
}
