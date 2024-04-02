// https://school.programmers.co.kr/learn/courses/30/lessons/131705

// 풀이1
function solution(number) {
  let count = 0;

  for (let i = 0; i < number.length; i++) {
    for (let l = i + 1; l < number.length; l++) {
      for (let k = l + 1; k < number.length; k++) {
        if (number[i] + number[l] + number[k] === 0) {
          count++;
        }
      }
    }
  }

  return count;
}
