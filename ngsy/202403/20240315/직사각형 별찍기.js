/**직사각형 별찍기
 * https://school.programmers.co.kr/learn/courses/30/lessons/12969?language=javascript
 */
function printStart() {
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", (data) => {
    const n = data.split(" ");
    const a = Number(n[0]),
      b = Number(n[1]);
    const star = "*".repeat(a);
    for (let i = 0; i < b; i++) console.log(star);
  });
}
