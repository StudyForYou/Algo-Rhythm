// https://school.programmers.co.kr/learn/courses/30/lessons/12945
// 피보나치 수열: 첫째 및 둘째 항이 1이며 그 뒤의 모든 항은 바로 앞 두 항의 합인 수열
// F(n) = F(n-1) + F(n-2) (n >= 3)

//풀이1
function solution(n) {
  // n번째 피보나치 수를 저장하기 위해 n + 1 크기의 배열 생성
  const fibo = Array(n + 1).fill();

  // 0번째와 1번째 피보나치 수 저장
  fibo[0] = 0;
  fibo[1] = 1;

  // 2번째부터 n번째까지 피보나치 수 계산
  for (let i = 2; i <= n; i++) {
    fibo[i] = (fibo[i - 1] + fibo[i - 2]) % 1234567;
  }

  // n번째 피보나치 수 리턴
  return fibo[n];
}

//풀이2, 시간초과
function solution(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return (solution(n - 1) + solution(n - 2)) % 1234567;
  }
}
