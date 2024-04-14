// TODO - 인풋이 작아서 맞았지 인풋 더 컸으면 분명 틀렸음. BigInt형 쓰는 법도 나중에 좀 써보자..

function solution(balls, share) {
  let ans = 1;
  let div = 1;

  for(let i=share+1; i<=balls; i++){
    ans *= i;
  }
  for(let j = 1;j<=(balls-share);j++){
    div *= j;
  }

  return Math.floor(ans/div);
}