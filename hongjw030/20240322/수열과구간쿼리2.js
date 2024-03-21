function solution(n) {
  var answer = 0;
  const arr = (n).toString(3).split("");
  let mul = 1;
  arr.forEach(el=>{
    answer += mul * Number(el);
    mul *= 3;
  })

  return answer;
}