/**영어 끝말잇기 Lv.2
 * https://school.programmers.co.kr/learn/courses/30/lessons/142086
 *
 */
function solution(n, words) {
  for (let i = 1; i < words.length; i++) {
    //이전 사람 마지막 글자와 첫번째 글자가 다른경우 , 이전 사람이 동말하게 말한 단어가 있을경우
    if (
      words[i - 1].slice(-1) !== words[i].charAt(0) ||
      words.slice(0, i).includes(words[i])
    ) {
      let num = (i % n) + 1;
      let turn = parseInt(i / n) + 1;

      return [num, turn];
    }
  }
  return [0, 0];
}
