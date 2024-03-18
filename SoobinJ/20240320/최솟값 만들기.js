function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  return A.reduce((acc, el, index) => {
    return acc + el * B[index];
  }, 0);
}
