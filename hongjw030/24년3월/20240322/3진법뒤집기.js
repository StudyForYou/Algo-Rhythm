function solution(arr, queries) {
  var answer = [];
  queries.forEach(query =>{
    let minInd = -1;
    for(let i = query[0];i<=query[1];i++){
      if (query[2] < arr[i]){
        if (minInd == -1) minInd = i;
        else{
          if (arr[minInd] > arr[i]) minInd = i;
        }
      }
    }
    if (minInd == -1) answer.push(-1);
    else answer.push(arr[minInd]);
  })
  return answer;
}