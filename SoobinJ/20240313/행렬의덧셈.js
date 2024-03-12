function solution(arr1, arr2) {
  return arr1.map((e, i) => {
    return e.reduce((acc, el, i2) => {
      acc.push(el + arr2[i][i2]);
      return acc;
    }, []);
  });
}
