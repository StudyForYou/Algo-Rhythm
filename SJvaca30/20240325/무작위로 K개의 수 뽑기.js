/**
https://school.programmers.co.kr/learn/courses/30/lessons/181858
 */

function solution(arr, k) {
  // Set 자료구조를 사용하여 중복된 수를 제거하고 순서를 유지
  const set = new Set(arr);
  const result = [];

  // Set의 크기가 k보다 크거나 같으면 먼저 k개의 수를 result에 추가
  if (set.size >= k) {
    let i = 0;
    for (const num of set) {
      if (i < k) {
        result.push(num);
        i++;
      } else {
        break;
      }
    }
  } else {
    // Set의 크기가 k보다 작으면 result에 set의 모든 수를 추가
    for (const num of set) {
      result.push(num);
    }
  }

  // result의 길이가 k보다 작으면 -1로 채우기
  if (result.length < k) {
    const diff = k - result.length;
    for (let i = 0; i < diff; i++) {
      result.push(-1);
    }
  }

  return result;
}
