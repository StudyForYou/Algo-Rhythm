// https://school.programmers.co.kr/learn/courses/30/lessons/142086
// 레벨: 1
// 난이도: 너무 어려웠음.

function solution(s) {
  const result = [];
  // 각 문자 마지막 index 저장
  const last = {};

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    // c가 lastSeen에 있으면, result에 i - last[c] 추가
    if (c in last) {
      result.push(i - last[c]);
    }
    // 없으면, result에 -1 추가
    else {
      result.push(-1);
    }

    // 마무리 업데이트
    last[c] = i;
  }

  return result;
}
