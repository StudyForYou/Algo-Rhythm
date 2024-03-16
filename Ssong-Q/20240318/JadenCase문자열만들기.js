/**
 * JadenCase 문자열 만들기 - 문자열이 들어오면 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열로 만드는 것
 * @param {string} s 문자열
 * @returns JadenCase 문자열
 */

function solution(s) {
  let answer = "",
    temp = [];

  s.split(" ").forEach((val) => {
    if (val === "") {
      temp.push("");
      return;
    }

    if (
      !(val[0].charCodeAt() >= 65 && val[0].charCodeAt() <= 90) &&
      !(val[0].charCodeAt() >= 97 && val[0].charCodeAt() <= 122)
    ) {
      val = val[0] + val.slice(1).toLowerCase();
      temp.push(val);
      return;
    }

    val = val[0].toUpperCase() + val.slice(1).toLowerCase();
    temp.push(val);
  });

  answer = temp.join(" ");

  return answer;
}

console.log(solution("3people unFollowed me"));
console.log(solution("  for the last week  "));
console.log(solution("unFollowed    3People"));
console.log(solution("unFollowed 3 p  P"));
console.log(solution("A"));
