//school.programmers.co.kr/learn/courses/30/lessons/12911

/**
1. n을 2진수로 변환
2. 1의 개수를 카운트
3. n+1부터 탐색하며 조건 만족하는 숫자 찾기 
  - 2진수로 변환했을 때 1의 개수가 n과 동일
  - n보다 큰 수
4. 조건을 만족하는 숫자를 찾으면 2진수로 변환 후 10진수로 변환
*/

function solution(n) {
  // n을 2진수 문자열로 변환
  let bStr = n.toString(2);
  // 2진수 문자열에서 '1'의 개수를 카운트
  let count = bStr.split("1").length - 1;

  for (let i = n + 1; i <= 1000000; i++) {
    // i를 2진수 문자열로 변환
    let bStr2 = i.toString(2);
    // 2진수 문자열에서 '1'의 개수를 카운트
    let count2 = bStr2.split("1").length - 1;

    // n과 2진수로 변환했을 때 1의 개수가 같으면
    if (count2 === count) {
      // 2진수 문자열을 10진수로 변환하여 반환
      return parseInt(bStr2, 2);
    }
  }

  // 조건을 만족하는 숫자가 없으면 -1 반환
  return -1;
}
