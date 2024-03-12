function solution(ineq, eq, n, m) {
  let answer = 0;

  if (ineq === ">") {
    if (eq === "=") return (answer = Number(n >= m));
    answer = Number(n > m);
  }

  if (ineq === "<") {
    if (eq === "=") return (answer = Number(m >= n));
    answer = Number(m > n);
  }

  return answer;
}
