// https://school.programmers.co.kr/learn/courses/30/lessons/17681
// 레벨: 1

function solution(n, arr1, arr2) {
  // 1. arr1, arr2를 2진수로 변환
  let ARR1 = arr1.map((el) => {
    return Number(el.toString(2));
  });
  let ARR2 = arr2.map((el) => {
    return Number(el.toString(2));
  });

  // 2. 2진수로 변환한 arr1, arr2를 n자리수로 맞추기
  let ARR3 = [];
  for (let i = 0; i < n; i++) {
    ARR3.push((ARR1[i] + ARR2[i]).toString().padStart(n, "0"));
  }

  // 3. 2진수로 변환한 arr1, arr2를 비교하여 결과값 만들기
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(
      ARR3[i]
        .split("")
        .map((el) => {
          return el !== "0" ? "#" : " ";
        })
        .join("")
    );
  }

  return result;
}
