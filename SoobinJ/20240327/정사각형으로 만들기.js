function solution(arr) {
  let row = arr.length;
  let column = arr[0].length;

  if (row === column) return arr;

  if (column > row) {
    for (let i = 0; i < column - row; i++) {
      arr.push(Array(column).fill(0));
    }
    return arr;
  }

  return arr.reduce((acc, el) => {
    acc.push(el.concat(Array(row - column).fill(0)));
    return acc;
  }, []);
}
