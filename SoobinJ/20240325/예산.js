function solution(d, budget) {
  return d
    .sort((a, b) => a - b)
    .reduce((acc, el) => {
      budget -= el;
      return budget < 0 ? acc : (acc += 1);
    }, 0);
}
