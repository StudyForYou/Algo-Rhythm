/**
https://school.programmers.co.kr/learn/courses/30/lessons/70129
 */

function solution(s) {
  let count = 0; // 변환 과정에서 제거된 0의 개수를 카운팅
  let depth = 0; // 이진 변환 횟수를 기록

  function convert(str) {
    // 1. 종료 조건
    if (str === "1") return;

    // 2. 0 제거 및 길이 계산
    const newStr = str.replace(/0/g, "");
    const length = newStr.length;

    // 3. 제거된 0 개수를 count에 누적
    count += str.length - length;

    // 4. 재귀 호출
    depth++;
    convert(length.toString(2));
  }

  convert(s);

  return [depth, count];
}
