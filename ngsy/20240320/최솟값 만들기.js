/**최솟값 만들기 Lv.2
 * https://school.programmers.co.kr/learn/courses/30/lessons/12941
 *
 *
 */
function solution(A, B) {
  //곱한 수를 더해서 최솟값을 만들기 위해 A는 오름차순으로 정렬 하고 B는 내림차순으로 정렬하여 A의 최소 값과 B의 최대값 순으로 곱하여 최솟값을 구한다.
  B.sort((a, b) => b - a); //내림차순 정렬
  //오름차순으로 정렬 후 A ,B 각 요소들을 곱하고 합산값 반환
  const answer = A.sort((a, b) => a - b).reduce(
    (acc, cur, idx) => acc + cur * B[idx],
    0
  );

  return answer;
}
