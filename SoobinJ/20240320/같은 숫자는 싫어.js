function solution(arr) {
  return arr.filter((e, idx) => e !== arr[idx - 1]);
}
