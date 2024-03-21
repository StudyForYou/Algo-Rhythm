function solution(n) {
  let num = n;
  let num2 = [];

  while (num >= 3) {
    num2.push(num % 3);
    num = Math.floor(num / 3);
  }
  num2.push(num);

  return num2.reverse().reduce((acc, el, index) => {
    if (el === 0) return acc;
    return (acc += 3 ** index * el);
  }, 0);
}
