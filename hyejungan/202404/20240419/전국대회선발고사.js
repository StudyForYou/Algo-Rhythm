/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/181851
 * @param {number[]} rank 0~n-1번까지 학생의 등수
 * @param {boolean[]} attendance 대회 참여 가능 여부
 * @returns 대회참여 가능한 학생중 높은 등수의 번호를 a,b,c라고 할때 10000 * a + 100 * b + c를 리턴
 */
function solution(rank, attendance) {
  let nR = rank
    .reduce((acc, cur, i) => {
      if (attendance[i] === true) acc.push([cur, i]);
      return acc;
    }, [])
    .sort((a, b) => a[0] - b[0]);

    //console.log(nR); [ [ 2, 2 ], [ 4, 4 ], [ 5, 3 ], [ 7, 1 ] ]  2번은 2등, 4번은 4등, 3번은 5등, 1번은 7등

  return nR[0][1] * 10000 + nR[1][1] * 100 + nR[2][1];
}

console.log(solution([3, 7, 2, 5, 4, 6, 1], [false, true, true, true, true, false, false]))