function solution(s) {
  let answer = true,
    stack = [];

  for (let i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] === "(" && s[i] === ")") stack.pop();
    else stack.push(s[i]);
  }

  answer = stack.length ? false : true;

  return answer;
}

console.log(solution("()()"));
console.log(solution("(())()"));
console.log(solution(")()("));
console.log(solution("(()("));
