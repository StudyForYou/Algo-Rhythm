// 머쓱아~ 왜 굳이 공부를 하려들어~
// 만약 2중 for문을 돌린다면 최악의 경우 100개 글자를 10번 확인하니 시간 초과 안 남.
// forEach문은 break 불가능해서 for문씀
function solution1(spell, dic) {
  // 아니 하..... findLastIndex 를 지원하지 않는 노드18이전 버전이라 틀렸단게말이야방구야
  for(let word of dic){
    let arr = word.split("");
    for (let i of spell){
      if ((arr.findIndex(el=>el===i)) !== (arr.findLastIndex(el=>el===i))){
        // i가 여러 개 있다는 뜻이므로 탈락.
        break;
      }else if (arr.findIndex(el=>el===i) === -1){
        // i가 없다는 뜻이므로 탈락
        break;
      }else{
        continue;
      }
    }return 1;
  }
}

function solution(spell, dic){
  for(let word of dic){
    let arr = word.split("");
    let count = (new Array(spell.length)).fill(0);
    arr.forEach((el) =>{
      if (el in spell){
        let ind = spell.findIndex(char => char === el);
        console.log(ind)
        count[ind]++;
      }
    });

    // count의 모든 수가 1이면 ok 아니면 반복
    if (count.every(el=>el===1)){
      return 2;
    }
  }
  return 1;
}
