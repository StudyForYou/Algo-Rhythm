/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/12951
 * 문제 이름 : JadenCase문자열만들기
 * @param {string} s 문자열
 * @returns 문장을 이루는 각 단어당 첫글자는 대문자 이후는 소문자로 변형해서 출력
 * " S"와 같이 첫 단어가 공백으로 시작할때 공백은 대괄호표기법([0])으로 접근하면 undefined가 뜬다는걸 몰랐다. 삽질함.
 */

function solution(s) {
  return s
    .split(" ")
    .map((l) => {
      return l.charAt(0).toUpperCase() + l.slice(1).toLowerCase();
    })
    .join(" ");
}
