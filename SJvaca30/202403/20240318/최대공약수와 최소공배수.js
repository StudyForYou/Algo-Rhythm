/**
https://school.programmers.co.kr/learn/courses/30/lessons/12940
 */

// 풀이 1
function solution(n, m) {
  // 유클리드 호제법
  // 두 숫자 a와 b의 최대공약수는 a와 b-a의 최대공약수와 같다
  function gcd(n, m) {
    while (m) {
      [n, m] = [m, n % m];
    }
    // m이 0이 될 때가지 반복, 최대공약수는 n
    return n;
  }
  // 최소공배수는 두 수의 곱을 최대공약수로 나눈 값
  let b = (n * m) / gcd(n, m);
  return [gcd(n, m), b];
}

// 풀이 2 (다른 사람의 풀이인데, 가장 기본적이며 정석이라고 생각함)
function solution(n, m) {
  let maxDivideNum;
  for (let i = 1; i <= Math.min(n, m); i++) {
    if (Math.max(n, m) % i === 0 && Math.min(n, m) % i === 0) maxDivideNum = i;
  }

  const answer = [maxDivideNum, (n * m) / maxDivideNum];
  return answer;
}
