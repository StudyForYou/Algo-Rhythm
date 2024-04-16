/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/17681
 * @param {number} n 지도의 한변 길이
 * @param {number[]} arr1 
 * @param {number[]} arr2 
 * @returns arr1, arr2를 2진수로 바꾸면 0은 빈칸 1은 벽이라고 했을때, 두 지도를 겹쳐 둘다 0인경우는 빈칸, 하나라도 1인경우는 벽이라고 함. 빈칸은 빈칸으로 벽은'#'으로 바꿔서 리턴
 */
function solution(n, arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    let bi_1 = arr1[i].toString(2);
    let bi_2 = arr2[i].toString(2);

    bi_1 = "0".repeat(n - bi_1.length) + bi_1;
    bi_2 = "0".repeat(n - bi_2.length) + bi_2;

    result.push(
      bi_1.split("").reduce((acc, cur, i) => {
        if (cur == 0 && bi_2[i] == 0) {
          acc += " ";
        } else {
          acc += "#";
        }
        return acc;
      }, "")
    );
  }
  return result;
}
