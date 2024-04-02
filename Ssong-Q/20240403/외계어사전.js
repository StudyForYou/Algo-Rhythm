function solution(spell, dic) {
  let answer = 2,
    arr = Array.from({ length: dic.length }, () => 0);
  const len = spell.length;

  for (let s of spell) {
    for (let i = 0; i < dic.length; i++) {
      if (dic[i].includes(s)) arr[i]++;
    }
  }

  for (let x of arr) {
    if (x === len) answer = 1;
  }

  return answer;
}

console.log(solution(["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"]));
console.log(solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"]));
console.log(
  solution(["s", "o", "m", "d"], ["moos", "dzx", "smm", "sunmmo", "som"])
);
