// https://school.programmers.co.kr/learn/courses/30/lessons/81301
// 레벨: 1

function solution(s) {
  let numbers = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  for (let word in numbers) {
    let regex = new RegExp(word, "g");
    s = s.replace(regex, numbers[word]);
  }

  return Number(s);
}
