// https://school.programmers.co.kr/learn/courses/30/lessons/134240
// [1, 3, 4, 6]	"1223330333221"
// [1, 7, 1, 2]	"111303111"

function solution(food) {
  let result = "";

  // 음식 배열의 첫 번째 요소부터 중간까지 반복
  for (let i = 1; i < food.length; i++) {
    // 각 음식의 절반을 result에 추가
    for (let j = 0; j < Math.floor(food[i] / 2); j++) {
      result += i.toString();
    }
  }

  // 중간에 물 추가
  result += "0";

  // 음식 배열의 마지막 요소부터 중간까지 거꾸로 반복
  for (let i = food.length - 1; i > 0; i--) {
    // 각 음식의 절반을 result에 추가
    for (let j = 0; j < Math.floor(food[i] / 2); j++) {
      result += i.toString();
    }
  }

  return result;
}
