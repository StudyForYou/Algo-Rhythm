function solution(number) {
  var answer = 0;
  for (let i = 0; i < number.length - 2; i++) {
    const newArr = number.slice(i + 1).sort((a, b) => a - b);
    const num = 0 - number[i];
    let p1 = 0;
    let p2 = 1;
    while (p1 !== newArr.length - 1) {
      if (newArr[p1] + newArr[p2] === num) answer++;
      if (p2 === newArr.length - 1) {
        p1++;
        p2 = p1 + 1;
      } else {
        p2++;
      }
    }
  }
  return answer;
}
