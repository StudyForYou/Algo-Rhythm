// 지코바 먹고싶당 쉬운 문제
function solution(chicken) {
  let answer = 0;
  let coupon = chicken;
  while(coupon>=10){
    let leftover = coupon%10;
    answer += Math.floor(coupon/10);
    coupon = leftover+ Math.floor(coupon/10)
  }
  return answer;
}