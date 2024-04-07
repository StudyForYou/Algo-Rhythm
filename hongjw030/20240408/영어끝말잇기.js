// 틀린 단어만 찾으면 됨. 어차피 words.length/n 번째회차에서 누가 틀렸는지 계산 가능하니까.
// 어렵진 않은데 좀 더 코드를 줄일 수 있는 로직이 생각나진 않음... 
// 단어 중복을 찾아야 해서 이중 for문을 돌릴수밖에 없는 문제.
function solution(n, words) {
  // 틀린 단어 인덱스
  let wrongInd = 0;
  // 틀린 사람이 있는가
  let flag = false;

  for(let i=1;i<words.length;i++){
    if ((words.slice(0, i)).includes(words[i]) || (words[i][0] !== words[i-1][words[i-1].length-1])){
      flag = true;
      wrongInd = i+1;
      break;
    }
  }

  if (!flag) return [0,0];
  else{
    let cycle = Math.ceil(wrongInd / n);
    let loser = wrongInd % n ? wrongInd % n : n;
    return [loser, cycle]
  }
}
