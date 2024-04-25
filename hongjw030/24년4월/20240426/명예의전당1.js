function solution(k, score) {
  const q = [];
  const answer = [];

  for(let s of score){
    q.push(s);
    if (q.length > k){
      let ind = q.indexOf(Math.min(...q));
      q.splice(ind, 1);
    }answer.push(Math.min(...q))
  }
  return answer;
}
