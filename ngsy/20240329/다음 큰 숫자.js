/**다음 큰 숫자 Lv.2
 * https://school.programmers.co.kr/learn/courses/30/lessons/12911
 *
 */
function solution(n) {
  const oneCount = n
    .toString(2)
    .split("")
    .filter((el) => el === "1").length;
  let minNum = n;
  while (true) {
    ++minNum;
    const count = minNum
      .toString(2)
      .split("")
      .filter((el) => el === "1").length;
    if (oneCount === count) return minNum;
  }
}
