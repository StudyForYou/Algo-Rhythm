/**카펫 Lv.2
 * https://school.programmers.co.kr/learn/courses/30/lessons/42842
 *
 */
function solution(brown, yellow) {
  //총 격자 수
  const total = brown + yellow;

  // 가로 첫째줄은 갈색이고 갈색의 최소수는 8이니 가로는 최소 3이상으로 시작
  for (let width = 3; width <= total; width++) {
    // 카펫의 전체 격자 수가 가로 길이로 나누어 떨어질 때
    if (total % width === 0) {
      //가로의 갯수로 나눈 값이 세로
      const height = total / width;
      //노란색은 중앙에 위치하니 가로에서 양쪽끝을 뺸 값과 세로에서 양쪽 끝을
      // 뺸 값으로 갯수를 노란색 수 구해 제시한 노란색 개수와 일치하면 가로세로 리턴
      if ((width - 2) * (height - 2) === yellow) {
        return [height, width];
      }
    }
  }
}
