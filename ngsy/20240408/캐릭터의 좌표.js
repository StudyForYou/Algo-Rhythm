/**캐릭터의 좌표 Lv.0
 * https://school.programmers.co.kr/learn/courses/30/lessons/120861
 *
 */
function solution(keyinput, board) {
  const limitX = Math.floor(board[0] / 2);
  const limitY = Math.floor(board[1] / 2);

  let [x, y] = [0, 0];

  for (let key of keyinput) {
    switch (key) {
      case "up":
        Math.abs(y) >= limitY ? "" : (y += 1);
        break;
      case "down":
        Math.abs(y) >= limitY ? "" : (y -= 1);
        break;
      case "left":
        Math.abs(x) >= limitX ? "" : (x -= 1);
        break;
      case "right":
        Math.abs(x) >= limitX ? "" : (x += 1);
        break;
    }
  }

  const answer = [x, y];
  return answer;
}
