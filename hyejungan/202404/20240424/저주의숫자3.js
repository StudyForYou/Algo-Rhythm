/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/120871
 * @param {number} n 10진법 수
 * @returns 3이 들어가거나, 3의 배수는 사용하지 않는 3x숫자가 있다. 10진법의 수가 주어질때 3x 숫자는 뭘까?
 */
function solution(n) {
  let x_3 = [0, 1, 2];
  if (n === 1 || n === 2) return x_3[n];

  for (let i = 3; i <= n; i++) {
    let num = x_3[i - 1] + 1;

    while ((num + "").split("").includes("3") || num % 3 === 0) {
      num++;
    }

    x_3.push(num);
  }
  return x_3.pop();
}
