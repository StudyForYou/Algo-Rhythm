// https://school.programmers.co.kr/learn/courses/30/lessons/12926
// 레벨: 1
// 난이도: 어려웠음 

// A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z
// 26개

function solution(s, n) {
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";

  return s
    .split("")
    .map((el) => {
      if (el === " ") return el;
      // 대문자인지 소문자인지 확인
      const tmp = el === el.toUpperCase() ? upperCase : lowerCase;
      // Z 혹은 z를 넘어가는 경우를 위해서 '% 26'을 사용
      const index = (tmp.indexOf(el) + n) % 26;
      return tmp[index];
    })
    .join("");
}
