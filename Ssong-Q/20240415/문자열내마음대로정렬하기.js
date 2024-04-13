function solution(strings, n) {
  let answer = [];

  strings.sort((a, b) => {
    if (a[n] === b[n]) return a.localeCompare(b);
    else return a[n].localeCompare(b[n]);
  });

  answer = strings;

  return answer;
}

console.log(solution(["sun", "bed", "car"], 1));
console.log(solution(["abce", "abcd", "cdx"], 2));
