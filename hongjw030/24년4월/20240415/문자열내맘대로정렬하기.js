// 무난.

function solution(strings, n) {
  return strings.sort((first, second)=>{
    if (first[n]!== second[n]) return first.charCodeAt(n) - second.charCodeAt(n);

    let ind = 0;
    while(true){
      if (first.charCodeAt(ind) !== second.charCodeAt(ind)) return first.charCodeAt(ind) - second.charCodeAt(ind);
      else ind++;
    }
  })
}