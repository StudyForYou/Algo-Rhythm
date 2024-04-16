function solution(n, words) {
  let answer = [],
    temp = 0;

  for (let i = 1; i < words.length; i++) {
    if (words[i - 1].at(-1) !== words[i].at(0)) {
      temp = i;
      break;
    }

    if (words.findIndex((el) => el === words[i]) !== i) {
      temp = i;
      break;
    }
  }

  if (!temp) answer = [0, 0];
  else {
    answer.push((temp + 1) % n ? (temp + 1) % n : n);
    answer.push(Math.floor(temp / n) + 1);
  }

  return answer;
}

console.log(
  solution(3, [
    "tank",
    "kick",
    "know",
    "wheel",
    "land",
    "dream",
    "mother",
    "robot",
    "tank",
  ])
);
console.log(
  solution(5, [
    "hello",
    "observe",
    "effect",
    "take",
    "either",
    "recognize",
    "encourage",
    "ensure",
    "establish",
    "hang",
    "gather",
    "refer",
    "reference",
    "estimate",
    "executive",
  ])
);
console.log(
  solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])
);
