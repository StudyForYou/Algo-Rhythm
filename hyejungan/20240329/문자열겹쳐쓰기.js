/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/181943?language=javascript
 * @param {string} my_string 
 * @param {string} overwrite_string 
 * @param {number} s 
 * @returns my_string의 s번 인덱스 부터 overwrite_string길이까지 overwrite_string 문자열로 대체후 반환
 */

function solution(my_string, overwrite_string, s) {
  return (
    my_string.substring(0, s) +
    overwrite_string +
    my_string.substring(s + overwrite_string.length)
  );
}
