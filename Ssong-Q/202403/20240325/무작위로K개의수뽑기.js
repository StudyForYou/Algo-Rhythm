function solution(arr, k) {
  let answer = [];
  const set = [...new Set(arr)];

  if (set.length > k) {
    answer = set.slice(0, k);
  } else {
    const len = set.length;
    for (let i = 0; i < k - len; i++) set.push(-1);
    answer = set;
  }
  return answer;
}

console.log(solution([0, 1, 1, 2, 2, 3], 3));
console.log(solution([0, 1, 1, 1, 1], 4));
