// 어렵진 않고.. 걍 0렙느낌

function solution(brown, yellow) {
  let total = brown + yellow;
  // 카펫 세로길이는 반드시 3 이상, total의 제곱근 이하여야 함.
  // 예를 들어 total이 48라면 answer 배열을 [16,3 / 12,4 / 8,6] 경우가 있음.
  // brown 총개수 = 카펫가로 +가로 + 카펫세로 + 세로 - 4여야 하는데 8,6인경우 되니까 답은 8,6
  for(let col = 3;col <= Math.sqrt(total); col++){
    if (total % col === 0) {
      let row = Math.floor(total / col);
      if (brown === ((col+row)*2-4)){
        return [row, col];
      }
    }
  }
}
