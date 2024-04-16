// 왜 어렵지... 분명 쉬운문제같은데.. ㅠㅠ

function solution(score) {
  const average = score.map((el, ind)=>{
    return [(el[0]+el[1])/2, ind]
  })

  average.sort((a, b)=>b[0]-a[0]);

  for(let i = 0;i<average.length;i++){
    if (i==0) average[i].push(1);
    else{
      if (average[i-1][0] === average[i][0]){
        average[i].push(average[i-1][2])
      }else{
        average[i].push(i+1);
      }
    }
  }

  average.sort((a,b)=>a[1] - b[1]);

  return average.map(el=>el[2])
}
