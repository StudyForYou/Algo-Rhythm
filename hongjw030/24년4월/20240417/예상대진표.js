function solution(n,a,b){
  // 0번의 경기에선 a, b가
  // 1번의 경기 후엔 Math.ceil(a/2)가 됨
  // 이때 a가 홀수면서 b보다 1작으면 그 때가 붙는 때임.

  /*
  일케풀면 44.1점나옴 ;; 왜..? 왜 시간초과지 
  for문1번만 돌렸고 한번마다 a랑 b 크기가 반토막이 나니까 최악의 경우 2와 2^20이래도 
  시간초과 날 그게 아닌데?? 그리고 2의 16승정도면 number형 맞지 않나?

  ............ 하.... 조건을 잘 확인하자 a가 더 클수도 있구나 
  (근데 n은 왜 있는 거지??)
  */ 
  let count = 1;
  let aInd = Math.min(a, b)
  let bInd = Math.max(a, b)
  while(!((aInd%2===1) && (aInd-bInd === -1))){
    aInd = Math.ceil(aInd/2);
    bInd = Math.ceil(bInd/2);
    count++;
  }
  return count;
}