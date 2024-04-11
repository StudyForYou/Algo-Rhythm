function solution(n, words) {
  let arr = [];
  let idx = 0;

  while (idx < words.length) {
    if (arr.at(-1)) {
      const last = arr.at(-1).slice(-1);
      if (
        words[idx].slice(0, 1) !== last ||
        arr.some((e) => e === words[idx])
      ) {
        return [(arr.length % n) + 1, Math.ceil((idx + 1) / n)];
      }
    }
    arr.push(words[idx]);
    idx++;
  }

  return [0, 0];
}
