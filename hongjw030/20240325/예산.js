function solution(d, budget) {
  let actualBudget = 0;
  d.sort((a,b)=>a-b);
  
  for(let ind=0; ind < d.length; ind++){
    actualBudget += d[ind];
    if (actualBudget > budget){
      return ind;
    }
  }return d.length;
}