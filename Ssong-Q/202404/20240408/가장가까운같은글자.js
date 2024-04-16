function solution(s) {
  let answer = [];

  for (let i = s.length - 1; i >= 0; i--) {
    let dis = -1;

    for (let j = i; j >= 0; j--) {
      if (s[i] === s[j]) {
        if (i !== j) {
          dis = i - j;
          break;
        } else continue;
      }
    }

    answer.unshift(dis);
  }

  return answer;
}

console.log(solution("banana"));
console.log(solution("foobar"));
