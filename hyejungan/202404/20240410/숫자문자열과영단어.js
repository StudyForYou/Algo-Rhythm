/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/81301
 * @param {string} s 숫자와 숫자 영단어가 같이써있는 문자열
 * return 숫자영단어를 숫자로 변경하여 문자열을 숫자로 출력
 */
const alpabet = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function solution(s) {
  for (let i = 0; i < alpabet.length; i++) {
    s = s.replaceAll(alpabet[i], i);
  }
  return Number(s);
}
