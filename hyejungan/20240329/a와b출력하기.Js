/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/181951/solution_groups?language=javascript&type=my
 * 입력되는 두 수를 a = _ b = _ 형태로 출력
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  console.log(`a = ${input[0]}` + "\n" + `b = ${input[1]}`);
});
