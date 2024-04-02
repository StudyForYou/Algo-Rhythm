// https://school.programmers.co.kr/learn/courses/30/lessons/12973
// b aa baa → bb aa → aa →

function solution(s) {
  let temp = [];

  for (let i = 0; i < s.length; i++) {
    // 스택이 비어있지 않고 스택의 맨 위가 현재 문자와 같다면
    if (temp.length > 0 && temp[temp.length - 1] === s[i]) {
      // 스택의 맨 위를 제거
      temp.pop();
    } else {
      // 그렇지 않다면 현재 문자를 스택에 추가
      temp.push(s[i]);
    }
  }

  // 스택이 비어있으면 1 반환, 그렇지 않다면 0 반환
  return temp.length === 0 ? 1 : 0;
}
