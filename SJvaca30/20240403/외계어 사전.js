// https://school.programmers.co.kr/learn/courses/30/lessons/120869

function solution(spell, dic) {
  //spell을 정렬했음
  let sortedSpell = spell.sort().join("");
  let temp = 0;

  dic.forEach((el) => {
    // dic를 정렬했음
    let sortedDic = el.split("").sort().join("");
    // spell과 dic를 비교했음
    sortedSpell === sortedDic ? (temp = 1) : "";
  });

  // spell과 dic이 한 번이라도 같으면 해결되는 문제
  return temp === 1 ? 1 : 2;
}
