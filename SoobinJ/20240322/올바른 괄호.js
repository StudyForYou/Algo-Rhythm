function solution(s) {
  if (s[0] === ")") return false;

  let num = 0;

  for (let i = 0; i < s.length; i++) {
    s[i] === "(" ? (num += 1) : (num -= 1);
    if (num < 0) break;
  }

  return !num;
}
