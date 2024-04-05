/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/181923
 * @param {[num]} arr
 * @param {[[num]]} queries 이차원 배열
 * @returns 이차월 정수 배열 각 요소가 [s,e,k]일때 s <= i <= e 를 만족하는 k < arr[i]중 최솟값 출력. 없으면 -1
 */

function solution(arr, queries) {
  return queries.reduce((acc, cur) => {
    const [s, e, k] = cur;
    let result = [];
    for (let i = s; i <= e; i++) {
      if (k < arr[i]) {
        result.push(arr[i]);
      }
    }
    if (result.length) acc.push(Math.min(...result));
    else acc.push(-1);
    return acc;
  }, []);
}
