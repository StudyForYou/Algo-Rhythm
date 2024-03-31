function solution(number) {
  // 하나하나 계산하면 시간복잡도는 O(n^3)이지만 어차피 학생 수는 13명이 최대라 그냥 삼중for문때려박아도 ㄱㅊ
  let answer = 0;
  let totalS = number.length;

  for(let s1=0 ; s1<totalS-2 ; s1++){
    for(let s2=s1+1 ; s2<totalS-1 ; s2++){
      for(let s3=s2+1; s3<totalS ; s3++){
        if (number[s1] + number[s2] + number[s3] === 0) answer++;
      }
    }
  }

  return answer;
}
