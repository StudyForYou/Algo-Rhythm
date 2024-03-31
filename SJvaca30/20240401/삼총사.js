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

// 풀이2
function solution(number) {
  return number.reduce((acc, num1, index1) => {
    // 두 번째 수를 선택하는 반복문. 첫 번째 수 다음의 수부터 시작
    for (let index2 = index1 + 1; index2 < number.length; index2++) {
      // 세 번째 수를 선택하는 반복문. 두 번째 수 다음의 수부터 시작
      for (let index3 = index2 + 1; index3 < number.length; index3++) {
        // 세 수의 합이 0인 경우 acc 증가
        if (num1 + number[index2] + number[index3] === 0) {
          acc++;
        }
      }
    }
    return acc;
  }, 0);
}
