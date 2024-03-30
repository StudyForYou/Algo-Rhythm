function solution(t, p) {
  var answer = 0;
  let n = 0;
  let length = p.length;
  while (true) {
    if (n + length > t.length) break;
    t.slice(n, n + length) <= p && answer++;
    n++;
  }
  return answer;
}
