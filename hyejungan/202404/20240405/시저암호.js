/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/12926
 * @param {string} s 
 * @param {number} n 
 * @returns 주어진 S의 각 철자의 Unicode에서 n만큼 증가시켜  string을 변경하여 반환
 */
function solution(s, n) {
  return s
    .split("")
    .reduce((acc, cur) => {
      let codeNum = cur.charCodeAt();
      if (65 <= codeNum && codeNum <= 90) {           //소문자일때
        acc.push(
          codeNum + n > 90
            ? String.fromCharCode(codeNum + n - 26)   //z이상은 다시 a부터
            : String.fromCharCode(codeNum + n)
        );
      } else if (97 <= codeNum && codeNum <= 122) {   //대문자일때
        acc.push(
          codeNum + n > 122
            ? String.fromCharCode(codeNum + n - 26)   //Z이상은 다시 a부터
            : String.fromCharCode(codeNum + n)
        );
      } else {
        acc.push(cur);                                //알파벳이 아닌경우는 바로 푸시
      }
      return acc;
    }, [])
    .join("");
}
