/**이진 변환 반복하기 Lv.2
 * https://school.programmers.co.kr/learn/courses/30/lessons/12982
 *
 *
 *
 *
 */
function solution(s) {
  let count = 0;
  let zeroCnt = 0;
  let c = 0;
  let zeroSize;
  let temp = s;
  while (c !== "1") {
    //0의 개수 구하기
    zeroSize = temp.split("").filter((el) => el !== "1").length;
    //x의 길이 이진법 변환
    c = temp.replaceAll(0, "").length.toString(2);
    temp = c;
    count++;
    zeroCnt += zeroSize;
  }
  return [count, zeroCnt];
}
