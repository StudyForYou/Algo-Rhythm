// 오.. 좀 어려웠음. 스택으로 풀라면 어떻게 풀어야할지 감은 오는데 코드로는 못짜겠음.
function solution(progresses, speeds) {
  let answer = [];
  
  // 남은 일수 배열
  let dates = progresses.map((el, ind)=>{
    return Math.ceil((100-el)/speeds[ind]);
  })
  
  let standard = dates[0];
  let count = 0;
  for(let i = 0;i<dates.length;i++){
    if (standard >= dates[i]){
      count++;

    }else{
      answer.push(count);
      count = 1;
      standard = dates[i];
    }
    
    if (i >= dates.length -1){
      answer.push(count);
    }
  }
  return answer;
}