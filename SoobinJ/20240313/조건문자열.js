function solution(ineq, eq, n, m) {
  if (n === m && eq === "=") return 1;

  if (n > m && ineq === ">") return 1;

  if (n < m && ineq === "<") return 1;

  return 0;
}
