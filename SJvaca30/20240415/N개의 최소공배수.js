// https://school.programmers.co.kr/learn/courses/30/lessons/12953
// 유클리드 호제법을 원래 구조분해할당을 써왔었는데, 효율성이 구려서 if문으로 바꿈.

// 유클리드 호제법으로 최대공약수 a구하기
function gcd(a, b) {
  if (b) {
    return gcd(b, a % b);
  } else {
    return a;
  }
}

// 최소공배수: 두 수의 곱을 최대공약수로 나눈거
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function solution(arr) {
  return arr.reduce((a, b) => lcm(a, b));
}
