function solution(chicken) {
  let answer = 0,
    coupon = chicken;

  while (coupon >= 10) {
    const service = Math.floor(coupon / 10);
    answer += service;

    const leftCoupon = coupon - service * 10;
    coupon = service + leftCoupon;
  }

  return answer;
}

console.log(solution(100));
console.log(solution(1081));
