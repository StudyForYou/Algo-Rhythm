/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/181913
 * 문제 이름: 문자열여러번뒤집기
 * 문제 풀이 포인트: 배열 메서드 사용
 */

function solution(my_string, queries) {
  let str = my_string;
  for (q of queries) {
    let [s, e] = q;
    let newStr = str
      .split("")
      .slice(s, e + 1)
      .reverse()
      .join("");
    str = str.slice(0, s) + newStr + str.slice(e + 1);
  }
  return str;
}
