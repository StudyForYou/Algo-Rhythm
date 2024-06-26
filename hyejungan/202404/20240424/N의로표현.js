/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/42895
 * @param {number} N 
 * @param {number} number 
 * @returns number를 N으로만 표현할때 최소로 사용되는 N의 갯수를 리턴
 * 풀이보고 이해함....어려워ㅠ
 */
function solution(N, number) {
  const set = new Array(8).fill().map(() => new Set());
  for (let i = 0; i < 8; i++) {
    set[i].add(Number(`${N}`.repeat(i + 1)));
    for (let j = 0; j < i; j++) {
      for (const arg1 of set[j]) {
        for (const arg2 of set[i - j - 1]) {
          set[i].add(arg1 + arg2);
          set[i].add(arg1 - arg2);
          set[i].add(arg1 * arg2);
          set[i].add(Math.floor(arg1 / arg2));
        }
      }
    }

    if (set[i].has(number)) {
      return i + 1;
    }
  }

  return -1;
}
