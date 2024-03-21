/**
https://school.programmers.co.kr/learn/courses/30/lessons/12906
 */


function solution(arr) {
  let answer = [arr[0]]; // 결과 배열 초기화 (첫 번째 원소 담기)

  for (let i = 1; i < arr.length; i++) {
    // 두 번째 원소부터 배열 끝까지 반복
    if (arr[i - 1] !== arr[i]) answer.push(arr[i]); // 현재 원소와 이전 원소가 다르면 결과 배열에 추가
  }

  return answer; // 결과 배열 반환
}
