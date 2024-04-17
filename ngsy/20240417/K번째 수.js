/** K번째 수 Lv.1
 * https://school.programmers.co.kr/learn/courses/30/lessons/120882
 *
 */
function solution(array, commands) {
  let answer = [];

  for (let el of commands) {
    let temp = el;
    let num1 = temp[0] - 1; // 첫번쨰 자리수
    let num2 = temp[1]; //두번째 자리수
    let num3 = temp[2] - 1; //세번째 자리수
    //첫번쨰 자리수 부터 두번째자리 수까지 slice
    let arr = array.slice(num1, num2);
    //오름차순 정렬
    arr.sort((a, b) => a - b);

    answer.push(arr[num3]);
  }
  console.log(answer);

  return answer;
}
