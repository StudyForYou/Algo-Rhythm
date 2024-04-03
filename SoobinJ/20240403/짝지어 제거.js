function solution(s) {
  let arr = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === arr.at(-1)) {
      arr.pop();
    } else {
      arr.push(s[i]);
    }
  }

  return arr.length === 0 ? 1 : 0;
}
