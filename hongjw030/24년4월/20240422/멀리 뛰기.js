// 어렵다... 예전에 푼문제였는데 기억안나서 당황쓰.
function solution(n) {
  const arr = [0, 1, 2];
  if (n<=2) return arr[n];

  for(let i = 3;i<=n;i++){
    arr.push((arr[i-1] + arr[i-2])%1234567)
  }
  return arr.at(-1)
}
