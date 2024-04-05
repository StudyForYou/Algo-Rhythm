function solution(brown, yellow) {
  let arr = [];

  for (let i = 0; i <= yellow / 2; i++) {
    if (yellow % i === 0) arr.push([i, yellow / i]);
  }

  if (arr.length === 0) return [yellow + 2, 3];

  return arr.reduce((acc, el) => {
    if ((el[0] + 2) * (el[1] + 2) === brown + yellow) {
      acc.push([el[0] + 2, el[1] + 2].sort((a, b) => b - a));
      return acc;
    }
    return acc;
  }, [])[0];
}
