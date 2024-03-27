/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/181830
 * @param {num[][]} arr
 * @returns 0을 채워 행렬 길이가 같은 배열로 반환
 */
function solution(arr) {
  let row = arr.length;
  let column = arr[0].length;

  return arr.reduce((acc, cur, i) => {
    if (row - column > 0) {
      acc.push(cur.concat(Array(row - column).fill(0)));
    } else {
      acc.push(cur);
    }
    if (column - row > 0 && i === row - 1) {
      for (let i = 0; i < column - row; i++) {
        acc.push(Array(column).fill(0));
      }
    }

    return acc;
  }, []);
}
