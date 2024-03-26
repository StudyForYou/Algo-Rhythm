function solution(s) {
  let answer = "",
    flag = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      flag = 0;
      answer += s[i];
      continue;
    }
    if (flag % 2 === 0) {
      answer += s[i].toUpperCase();
      flag++;
      continue;
    }
    if (flag % 2 === 1) {
      answer += s[i].toLowerCase();
      flag++;
      continue;
    }
  }

  return answer;
}

console.log(solution("try hello world"));
