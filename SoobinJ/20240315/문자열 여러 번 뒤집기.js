function solution(my_string, queries) {
  return queries.reduce((acc, el) => {
    const strReverse = acc
      .slice(el[0], el[1] + 1)
      .split("")
      .reverse()
      .join("");
    return acc.slice(0, el[0]) + strReverse + acc.slice(el[1] + 1);
  }, my_string);
}
