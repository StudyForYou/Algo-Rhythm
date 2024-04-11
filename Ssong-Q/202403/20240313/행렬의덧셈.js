/**
 * 행렬 2개를 넣으면 해당 행렬을 덧셈하여 리턴
 * @param {[number[], number[]]} arr1
 * @param {[number[], number[]]} arr2
 * @returns 덧셈한 결과물 리턴
 */

function solution(arr1, arr2) {
  let answer = [];
  const len = arr1.length;

  for (let i = 0; i < len; i++) {
    let arr = [];
    const len = arr1[i].length;
    for (let j = 0; j < len; j++) {
      arr.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(arr);
  }

  return answer;
}

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
);
console.log(solution([[1], [2]], [[3], [4]]));
