function solution(s) {
  if (s[0] === ")") return false; // 시작이 잘못된 경우 리턴

  let num = 0;

  // (이면 +1 )이면 -1 진행, 음수가 되는 순간 반복 종료
  for (let i = 0; i < s.length; i++) {
    s[i] === "(" ? (num += 1) : (num -= 1);
    if (num < 0) break;
  }

  //0운 false, 나머지 숫자는 true 이므로, !로 처리
  return !num;
}
