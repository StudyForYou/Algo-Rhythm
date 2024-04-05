/**문자열 여러번 뒤집기 Lv.0
 * https://school.programmers.co.kr/learn/courses/30/lessons/181913
 *  Lv.0 수준이 맞는지 모르겠다..
 * @param {string} my_string
 * @param {Array} queries
 * @returns
 */
function solution(my_string, queries) {
  let answer = [...my_string];

  for (let arr of queries) {
    let start = arr[0];
    let end = arr[1];

    while (start < end) {
      let temp = answer[start];
      answer[start] = answer[end];
      answer[end] = temp;
      start++;
      end--;
    }
  }

  return answer.join("");
}
