/**
 * 행렬의 덧셈
 *
 * https://school.programmers.co.kr/learn/courses/30/lessons/12950
 *
 * @param {*} arr1
 * @param {*} arr2
 * @returns
 */
function solution(arr1, arr2) {
  let answer = [];
  //이차원 배열에 맞춰 이중 포문 작성
  for (let i = 0; arr1.length > i; i++) {
    //arr1 기준으로 배열의 길이 만큼 answer 에 빈배열 추가
    answer.push([]);
    for (let j = 0; arr1[i].length > j; j++) {
      //이차원 배열 각 인덱스에 위치한 값을 더해서 넣어 준다.
      answer[i].push(arr1[i][j] + arr2[i][j]);
    }
  }

  return answer;
}
