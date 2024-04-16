function solution(s, n) {
  let answer = "",
    arr = s.split(""),
    stack = [];

  for (let x of arr) {
    if (x === " ") {
      stack.push(" ");
      continue;
    }

    let xSum = x.charCodeAt() + n;
    if (
      x.charCodeAt() >= 65 &&
      x.charCodeAt() <= 90 &&
      xSum >= 91 &&
      xSum <= 115
    )
      xSum -= 26;
    if (
      x.charCodeAt() >= 97 &&
      x.charCodeAt() <= 122 &&
      xSum >= 123 &&
      xSum <= 147
    )
      xSum -= 26;

    stack.push(String.fromCharCode(xSum));
  }

  answer = stack.join("");

  return answer;
}

console.log(solution("AB", 1));
console.log(solution("z", 1));
console.log(solution("a B z", 4));
