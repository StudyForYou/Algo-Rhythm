/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/42842
 * @param {number} brown 
 * @param {number} yellow 
 * @returns 테두리 1줄은 brown, 가운데 yellow로 칠해진 카펫의 각 색깔 갯수만 주어졌을때 카펫 [가로, 세로] 리턴하기 (*가로 >= 세로)
 */
function solution(brown, yellow) {
  let total = brown + yellow;
  let sizes = [];
  for (let i = 3; i <= Math.sqrt(total); i++) {          //카펫 넓이가 나올 수 있는 경우의 구하기(대신 항상 3보다는 커야 yellow가 있을 수 있음)
    if (total % i === 0) {
      sizes.push([total / i, i]);                        //가로가 항상 커야해서 큰 수 먼저 넣어서 배열만들기
    }
  }

  return sizes.find((size) => {                        
    return size[0] * 2 + (size[1] - 2) * 2 === brown;    //넓이 경우의 수 중, 주어진 brown, yellow가 나올 수 있는 경우 찾아서 반환
  });
}
