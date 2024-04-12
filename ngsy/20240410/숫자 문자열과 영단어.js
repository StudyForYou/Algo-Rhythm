/** 숫자 문자열과 영단어 Lv.1
 * https://school.programmers.co.kr/learn/courses/30/lessons/81301
 *
 */
function solution(s) {
  const nums = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  //key(영문 숫자)를 전부 돌려보면 일치하는 key값이 있다면 value(아라비아 숫자)로 변경
  for (let key in nums) {
    s = s.replaceAll(key, nums[key]);
  }
  const answer = Number(s);

  return answer;
}
