/**
 * 선분 2개를 넣으면 삼각형을 완성하기 위한 나머지 선분 1개에 대한 경우의 수 리턴하는 함수
 * @param {[number, number]} sides 선분 2개의 배열
 * @returns 나머지 선분 1개에 대한 경우의 수
 */

function solution(sides) {
  let answer = 0,
    maxSide = 0,
    thirdSide;
  sides.sort((a, b) => a - b);

  // 첫번째 case: 주어진 선분 2개 중 하나가 가장 큰 선분일 경우
  // (나머지 하나의 길이가 주어진 선분 중 max 값과 같아지는 건 두번째 case에서 다룸)
  maxSide = Math.max(...sides);
  for (let i = 1; i < maxSide; i++) {
    if (sides[0] + i > maxSide) answer++;
  }

  // 두번째 case: 주어진 선분 2개가 아닌 나머지 하나가 가장 큰 선분일 경우
  // (나머지 하나의 길이가 주어진 선분 중 max 값과 같은 값에서부터 출발)
  for (thirdSide = maxSide; thirdSide < sides[0] + sides[1]; thirdSide++) {
    answer++;
  }

  return answer;
}

console.log(solution([1, 2]));
console.log(solution([3, 6]));
console.log(solution([11, 7]));
