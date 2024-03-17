/**
https://school.programmers.co.kr/learn/courses/30/lessons/12969
 */

// 첫번째
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const b = Number(n[0]),
    a = Number(n[1]);

  let result = "";
  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      result += "*";
    }
    result += "\n";
  }

  console.log(result);
});

// 두번째
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const b = Number(n[0]),
    a = Number(n[1]);

  const result = Array(a)
    .fill("*")
    .map(() => Array(b).fill("*").join(""))
    .join("\n");

  console.log(result);
});


