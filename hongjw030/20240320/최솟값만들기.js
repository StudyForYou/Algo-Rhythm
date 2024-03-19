function solution(A,B){

  A.sort((a, b)=> (a-b));
  B.sort((a, b)=> (b-a));

  const ans = A.reduce((acc, a, ind)=> acc + a * B[ind], 0)

  return ans;
}