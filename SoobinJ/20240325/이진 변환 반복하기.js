function solution(s) {
  let str = s;
  let num = 0;
  let idx = 0;

  while (str !== "1") {
    const length = str.replaceAll("0", "").length;
    num += str.length - length;
    str = length.toString(2);
    idx++;
  }

  return [idx, num];
}
