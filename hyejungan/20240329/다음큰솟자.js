/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/12911
 * @param {number} n 
 * @returns n보다 크고 이진수의 1의 갯수와 n의 이진수의 1의 갯수와 동일 한 수중 가장작은 수를 리턴
 */
function solution(n) {
  let n_2 = n.toString(2).replaceAll("0", "").length;
  let result = n;

  while (true) {
    n += 1;
    if (n.toString(2).replaceAll("0", "").length === n_2) {
      result = n;
      break;
    }
  }
  return result;
}
