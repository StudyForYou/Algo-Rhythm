/**
https://school.programmers.co.kr/learn/courses/30/lessons/12951
 */

function solution(s) {
  const words = s.split(" ");

  // 맨 앞 글자, 나머지 글자를 나눠서 각각 변환한다.
  const JCW = words.map((word) => {
    const first = word[0].toUpperCase();
    const rest = word.slice(1).toLowerCase();
    return first + rest;
  });

  // 그리고 다시 합친다.
  return JCW.join(" ");
}
