// 양심적으로 findLastIndex는 쓸수 있게 해줘야함.... 그것만 있었어도 굳이 reverse할 필요 없을텐디
// 그래도 어렵진 않았습니당
function solution(s) {
  const arr = s.split("").reverse();
  const answer = arr.map((el, ind)=>{
    let sliced = arr.slice(ind+1, arr.length);
    let num = sliced.findIndex(a=>a===el);
    return num >= 0 ? num+1 : -1;
  })
  return answer.reverse();
}
