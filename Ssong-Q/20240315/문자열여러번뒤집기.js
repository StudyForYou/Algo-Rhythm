/**
 * 문자열을 이차원 배열로 뒤집을 수 있는 함수
 * @param {string} my_string
 * @param {number[][]} queries 이차원 배열
 * @returns 이차원 배열에 의해 뒤집어진 문자열
 */

function solution(my_string, queries) {
  let answer = "";

  for (let i = 0; i < queries.length; i++) {
    my_string =
      my_string.substring(0, queries[i][0]) +
      my_string
        .substring(queries[i][0], queries[i][1] + 1)
        .split("")
        .reverse()
        .join("") +
      my_string.substring(queries[i][1] + 1, my_string.length);
  }
  answer = my_string;

  return answer;
}

console.log(
  solution("rermgorpsam", [
    [2, 3],
    [0, 7],
    [5, 9],
    [6, 10],
  ])
);
