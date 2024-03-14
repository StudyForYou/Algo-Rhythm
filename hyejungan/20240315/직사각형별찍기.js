/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/12969
 * 문제 이름: 직사각형별찍기
 * 문제 풀이 포인트: repeat(갯수)사용
 */

process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  for (let i = 1; i <= b; i++) {
    console.log("*".repeat(a));
  }
});
