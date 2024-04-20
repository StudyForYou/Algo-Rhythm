/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/134240
 * @param {number[]} food  food[0] 물, 1~n번까지는 칼로리 낮은순으로 정렬된 음식의 갯수 
 * @returns 푸드파이트 1대 1 대결, 양쪽에서 시작, 칼로리 낮은 순으로 음식배치, 가운데는 물, 주어진 배열의 인덱스 값을 사용해 몇번의 음식의 몇번 먹는지 출력
 */
function solution(food) {
  let result = [0];

  for (let i = food.length - 1; i >= 1; i--) {
    while (food[i] > 1) {
      result.push(i);
      result.unshift(i);
      food[i] -= 2;
    }
  }
  return result.join("");
}
