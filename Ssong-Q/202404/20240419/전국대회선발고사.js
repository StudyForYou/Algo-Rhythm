function solution(rank, attendance) {
  let answer = 0,
    result = [];

  let i = 1;
  while (result.length < 3) {
    const IDX = rank.findIndex((el) => el === i);
    if (attendance[IDX]) result.push(IDX);

    i++;
  }

  answer = result[0] * 10000 + result[1] * 100 + result[2];

  return answer;
}

console.log(
  solution([3, 7, 2, 5, 4, 6, 1], [false, true, true, true, true, false, false])
);
console.log(solution([1, 2, 3], [true, true, true]));
console.log(
  solution([6, 1, 5, 2, 3, 4], [true, false, true, false, false, true])
);
