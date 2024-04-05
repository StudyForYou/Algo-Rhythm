/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/70129
 * @param {string} s => 2진법으로 나타낸 어떤 수
 * @returns s를 주어진 조건(2진법으로 나타내기)을 반복하다가 1이 나올때까지 반복한 횟수와 제거한 0의 갯수를 배열로 출력
 */
function solution(s) {
  let Zerocnt = 0;
  let cnt = 0;
  while (s !== "1") {
    s = s
      .split("")
      .reduce((acc, cur) => {
        if (cur == 1) acc.push(cur);
        else Zerocnt += 1;
        return acc;
      }, [])
      .join("")
      .length.toString(2);
    cnt += 1;
  }
  return [cnt, Zerocnt];
}
