function solution(nums) {
  let answer = 0;

  const N = nums.length / 2;
  const len = [...new Set(nums)].length;

  if (N <= len) answer = N;
  else answer = len;

  return answer;
}

console.log(solution([3, 1, 2, 3]));
console.log(solution([3, 3, 3, 2, 2, 4]));
console.log(solution([3, 3, 3, 2, 2, 2]));
