/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/12945
 * @param {number} n  
 * @returns 피보나치 수열 n번째 수를 구해서 1234567로 나눈 나머지를 리턴
 * 
 * 고생 1) 재귀로 풀었는데 예제 7번부터 틀림, 시간초과, 런타임에러 로 오답처리됨.
 * 고생 2) 반복문, 배열로 풀었는데 예제 7번부터 틀림
 * 최대 10만까지 받으면 수가 커질 것 같아서 bigint로 해결 => 통과
 */

function solution(n) {
  let fibo = [0, 1];

  for (let i = 2; i <= n; i++) {
    fibo.push(BigInt(fibo[i - 1]) + BigInt(fibo[i - 2]));
  }
  return fibo[n] % 1234567n;
}
