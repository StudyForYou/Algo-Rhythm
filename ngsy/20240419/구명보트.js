/** 구명보트 Lv.2
 * https://school.programmers.co.kr/learn/courses/30/lessons/42885
 *
 * 완전 탐색으로 풀었다가 테스트는 통과하지만 시간초과 발생
 */
function solution(people, limit) {
  let answer = 0;
  let left = 0;
  let right = people.length - 1;

  //오름차순 정렬
  people.sort((a, b) => a - b);

  while (left <= right) {
    //가장 작은 무게와 큰 무게
    let kg = people[left] + people[right];

    //무게 제한보다 작기 때문에 투 포인터 둘다 다음 인덱스로 넘어간다.
    if (limit >= kg) {
      left++;
      right--;
    }
    //무게 제한보다 크다면 가장 큰 인덱스 이전 인덱스로 옮긴다.
    if (limit < kg) right -= 1;

    answer++;
  }

  return answer;
}
