function solution(array, commands) {
  let answer = [];

  for (let i = 0; i < commands.length; i++) {
    let temp = [];
    const AT = commands[i][2];
    temp = array.slice(commands[i][0] - 1, commands[i][1]);
    temp.sort((a, b) => a - b);
    answer.push(temp[AT - 1]);
  }

  return answer;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
