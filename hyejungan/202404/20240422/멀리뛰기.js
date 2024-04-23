/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12914
 * @param {number} n 건너가야하는 칸의 갯수
 * @returns 1칸 or 2칸 뛰기만 가능할때 주어진 칸을 넘을 수 있는 방법의 수를 1234567로 나눈 나머지를 구해라
 */
function solution(n) {
  let num = [0, 1, 2];
  if(n <= 2) return num[n];
  
  for(let i = num.length; i <= n; i++) {
      num.push((num[i - 1] + num[i - 2])%1234567);
  }
  
  return num.pop()
}