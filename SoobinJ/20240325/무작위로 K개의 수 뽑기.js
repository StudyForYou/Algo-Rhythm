function solution(arr, k) {
  const newArr = [...new Set(arr)];
  return newArr.length >= k
    ? newArr.slice(0, k)
    : newArr.concat(Array(k - newArr.length).fill(-1));
}
