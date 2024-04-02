/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/120869
 * @param {str[]} spell 
 * @param {str[]} dic 
 * @returns spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가 dic에 존재한다면 1, 존재하지 않는다면 2를 return
 */
function solution(spell, dic) {
  let result = 2;
  dic.forEach((word) => {
    let use = 0;
    spell.map((l) => {
      use += word.includes(l) ? 1 : 0;
    });
    if (use >= spell.length) result = 1;
  });

  return result;
}
