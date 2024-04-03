function solution(sizes) {
  let arr = [...sizes].reduce((acc, el) => {
    acc.push(Math.min(el[0], el[1]));
    return acc;
  }, []);

  return Math.max(...sizes.flat()) * Math.max(...arr);
}
