function solution(progresses, speeds) {
  var answer = [];
  let count = 1;

  const arr = progresses.map((e, index) =>
    Math.ceil((100 - e) / speeds[index])
  );

  let num = arr[0];
  let idx = 1;

  while (idx < arr.length) {
    if (num >= arr[idx]) {
      count++;
    } else {
      answer.push(count);
      num = arr[idx];
      count = 1;
    }
    idx++;
  }
  answer.push(count);

  return answer;
}
