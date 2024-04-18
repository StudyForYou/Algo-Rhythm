/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42885
 * @param {number[]} people 사람들의 몸무게 배열
 * @param {number} limit 구명보트 제한 무게
 * @returns 사람들을 구출하는데 구명보트 제한 무게를 초과하지 않게 탈 수 있을때, 가장 최소로 필요한 구명보트 수
 * 투포인트로 품. 내림차순으로 정렬한 뒤, 가장 큰수와 가장작은 수를 더했을때 구명보트 제한 무게를 넘지 않으면 두번째 작은 수를 더하는 식으로 증가
 */
function solution(people, limit) {
  people.sort((a, b) => b - a);
  let count = 0;
  let p1 = 0;
  let p2 = people.length - 1;

  //p1 포인트가 p2 포인트보다 커지면 멈춘다.
  while (p1 <= p2) {
    if (people[p1] + (p1 === p2 ? 0 : people[p2]) <= limit) {
      p2--;
    }
    p1++;
    count++;
  }
  return count;
}
