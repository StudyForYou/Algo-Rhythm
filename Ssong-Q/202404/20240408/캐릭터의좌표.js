function solution(keyinput, board) {
  let answer = [],
    coordinate = [0, 0];

  let movement = (direction, coordinate) => {
    let [x, y] = coordinate;
    switch (direction) {
      case "left":
        if (x !== ((board[0] - 1) / 2) * -1) return [x - 1, y];
        break;
      case "right":
        if (x !== ((board[0] - 1) / 2) * 1) return [x + 1, y];
        break;
      case "up":
        if (y !== ((board[1] - 1) / 2) * 1) return [x, y + 1];
        break;
      case "down":
        if (y !== ((board[1] - 1) / 2) * -1) return [x, y - 1];
        break;
      default:
        break;
    }
    return [x, y];
  };

  for (let direction of keyinput) {
    coordinate = [...movement(direction, coordinate)];
  }

  answer = coordinate;

  return answer;
}

console.log(solution(["left", "right", "up", "right", "right"], [11, 11]));
console.log(solution(["down", "down", "down", "down", "down"], [7, 9]));
