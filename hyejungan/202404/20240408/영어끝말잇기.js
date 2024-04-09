/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12981
 * @param {number} n
 * @param {string[]} words
 * @returns n명이 참여한 끝말잇기에서 같은단어를 쓰거나 끝말잇기 규칙에 위반될때 [몇번째 사람, 몇번째 턴]에서 걸렸는지 리턴
 */

function solution(n, words) {
  let result = [0, 0];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let order = (i % n) + 1;
    let turn = Math.ceil((i + 1) / n);

    if (i > 0) {
      let last = words[i - 1].split("").pop();

      //words에 같은 word가 있는경우, 마지막 철자로 시작되지 않는경우
      if (i > words.indexOf(word) || words[i][0] !== last) {
        result = [order, turn];
        break;
      }
    }
  }

  return result;
}
