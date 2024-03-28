function solution(t, p) {
  var answer = 0;

  for(let first = 0; first <= t.length - p.length ; first++){
    if (Number(p) >= Number(t.slice(first, first+p.length))){
      answer ++;
    }
  }
  return answer;
}