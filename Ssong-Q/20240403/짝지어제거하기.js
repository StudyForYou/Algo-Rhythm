function solution(s) {
  let answer = 0,
    arr = [];

  for (let i = 0; i < s.length; i++) {
    if (arr[arr.length - 1] === s[i]) arr.pop();
    else arr.push(s[i]);
  }

  if (arr.length === 0) answer = 1;

  return answer;
}

console.log(solution("baabaa"));
console.log(solution("cdcd"));
