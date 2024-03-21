function solution(arr, queries) {
  return queries.reduce((acc, el) => {
    const min = arr
      .slice(el[0], el[1] + 1)
      .filter((e) => e > el[2])
      .sort((a, b) => a - b)[0];
    acc.push(min || -1);
    return acc;
  }, []);
}
