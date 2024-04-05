/**정사각형으로 만들기 Lv.0
 * https://school.programmers.co.kr/learn/courses/30/lessons/181830#
 *
 * 개선 : const zeroArr = new Array(zeroSize).fill(0); //Array 생성자를 사용하여 zeroSize 길이에 0의 배열을 만드는 방식.
 *
 *  //let zeroArr =[];  for(let k = 0; k < zeroSize ; k++) zeroArr.push(0); // 기존 0의 배열을 만드는 방식.
 */
function solution(arr) {
  let answer = [];
  const row = arr.length; //행
  const column = arr[0].length; //열

  // 행이 열보다 큰 경우 기존 요소에 0 을 추가해줘야하니  행과 열의 차 만큼 0 배열을 만들어주고 만약 열이 행보다 큰 경우 열의 크기 만큼 행을 추가해줘야하기때문에 행의 사이즈 를 반환한다.
  const zeroSize = row > column ? row - column : column;

  //zeroSize의 요소 0 을 가진 배열 생성
  const zeroArr = new Array(zeroSize).fill(0);

  //행과 열이 같은 경우
  if (column === row) return arr;

  //행의 수가 많은 경우
  if (row > column) for (let el of arr) answer.push(el.concat(zeroArr));

  //열의 수가 많은 경우
  if (column > row) {
    answer = [...arr];
    for (let i = 0; i < column - row; i++) answer.push(zeroArr);
  }

  return answer;
}
