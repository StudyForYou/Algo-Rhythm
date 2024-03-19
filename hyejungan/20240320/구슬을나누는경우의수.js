/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/120840
 * 문제 이름 : 구슬을 나눈는 경우의 수
 * @param {[number, number]}
 * @returns balls개 중에 서로다른 share개를 뽑아라(조합) (balls)C(share)
 */

function solution(balls, share) {
  let a = 1;
  let b = 1;
  let c = 1;

  for (let i = 1; i <= balls; i++) {
    a *= i;
  }

  for (let j = 1; j <= share; j++) {
    b *= j;
  }

  for (let k = 1; k <= balls - share; k++) {
    c *= k;
  }
  if (balls === share) return 1;
  return Math.round(a / (b * c));
}
