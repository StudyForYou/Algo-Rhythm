function solution(n) {
  // 피보나치 값 저장하는 배열
  const arr = [0, 1]
  // 피보나치값을 구하기 위해선 DP로 계산 (입력값 크기로봐선 재귀문 불가능할듯)
  for(let i = 2;i<=n;i++){
    // 아 ! 1부터 십만까지의 합이 아니고 피보나치합이라 겁나 커져서 number 범위 넘는구나 그래서 총합말고 나머지만 저장해야하군..
    arr.push((arr[i-1] + arr[i-2]) % 1234567);
  }

  return (arr[n]);
}
