/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/12950
 * 문제 이름: 행렬의 덧셈
 * 주어진 배열의 형태를 알기위해 map사용. for반복문 2번사용...중첩된게 마음에 안든다..
 */

const arr1 = [[1, 2],[2, 3]];
const arr2 = [[3, 4],[5, 6]];

function solution(arr1, arr2) {
  let newArr = [];
  let A = arr1.map((arr) => {
    return arr.length;
  });

  for (let i = 0; i < A.length; i++) {
    const Arr = [];
    for (let j = 0; j < A[i]; j++) {
      Arr.push(arr1[i][j] + arr2[i][j]);
    }
    newArr.push(Arr);
  }
  // console.log(newArr) 확인콘솔
  return newArr;
}

solution(arr1, arr2)
