/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/120884
 * @param {number} chicken 사켜먹은 치킨수
 * @returns 치킨시키면 쿠폰발급되고, 10개 모이면 서비스 치킨 1마리. 물론 서비스 치킨에도 쿠폰나옴. 서비스로 받은 치킨의 갯수는?
 */
function solution(chicken) {
  let service = 0;
  let coupon = 0;

  while (chicken >= 1) {
    let round = Math.floor(chicken / 10);
    service += round;
    coupon += chicken - round * 10;
    chicken = round;
  }

  if (coupon + chicken >= 10) {
    let round = Math.floor((coupon + chicken) / 10);
    service += round;

    if (coupon + chicken - round * 10 + round == 10) service++;
  }

  return service;
}
