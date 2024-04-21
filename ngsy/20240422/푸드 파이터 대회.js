/** 푸드 파이트 대회 Lv.1
 * https://school.programmers.co.kr/learn/courses/30/lessons/134240
 *
 *
 */
function solution(food) {
  let answer = "";
  //0번째 요소는 항상 같은 1 이기에 생략
  const newFood = food.slice(1, food.length);

  for (let i = 0; i < newFood.length; i++) {
    //음식 순서
    const num = i + 1;
    //음식 양을 두명이 먹을수있게 나눈후 반복
    answer += String(num).repeat(Math.floor(newFood[i] / 2));
  }
  //첫번째 선수 순서를 정했으면 물(0)을 추가하고 이를 뒤집어서 두번째 선수의 음식 순서를 합쳐줌
  answer = answer + "0" + [...answer].reverse().join("");

  return answer;
}
