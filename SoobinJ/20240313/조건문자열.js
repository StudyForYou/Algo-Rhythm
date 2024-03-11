function solution(ineq, eq, n, m) {
  const nNum = Number(n);
  const mNum = Number(m);

  if (nNum === mNum && eq === "=") return 1;

  if (nNum > mNum && ineq === ">") return 1;

  if (nNum < mNum && ineq === "<") return 1;

  return 0;
}
