function solution(id_pw, db) {
  let answer = "fail";

  id_pw.forEach((_, idx) => {
    for (let i = 0; i < db.length; i++) {
      if (idx === 0 && id_pw[idx] === db[i][0]) {
        answer = "wrong pw";
        if (id_pw[1] === db[i][1]) answer = "login";
      }
    }
  });

  return answer;
}

console.log(
  solution(
    ["meosseugi", "1234"],
    [
      ["rardss", "123"],
      ["yyoom", "1234"],
      ["meosseugi", "1234"],
    ]
  )
);
console.log(
  solution(
    ["programmer01", "15789"],
    [
      ["programmer02", "111111"],
      ["programmer00", "134"],
      ["programmer01", "1145"],
    ]
  )
);
console.log(
  solution(
    ["rabbit04", "98761"],
    [
      ["jaja11", "98761"],
      ["krong0313", "29440"],
      ["rabbit00", "111333"],
    ]
  )
);
