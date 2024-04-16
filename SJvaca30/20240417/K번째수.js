// https://school.programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
  let results = [];

  for (let command of commands) {
    // 구조분해할당으로 각각 선언
    let [i, j, k] = command;

    // 잘라내기
    let cut = array.slice(i - 1, j);

    // 정렬
    cut.sort((a, b) => a - b);

    // 결과값에 추가
    results.push(cut[k - 1]);
  }

  return results;
}
