function solution(numbers) {
  let a = numbers.map(String).sort((a, b) => (b+a) - (a+b)).join('');
  return a[0] == 0 ? '0' : a
}