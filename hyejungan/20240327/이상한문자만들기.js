/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/12930
 * @param {string} s
 * @returns 공백으로 구분된 각 단어의 짝수번째 철자를 대문자로 바꾼 string을 리턴
 */
function solution(s) {
  return s
    .toLowerCase()
    .split(" ")
    .reduce((acc, cur) => {
      acc.push(
        cur
          .trim()
          .split("")
          .map((l, i) => {
            return i % 2 === 0 ? l.toUpperCase() : l;
          })
          .join("")
      );
      return acc;
    }, [])
    .join(" ");
}
