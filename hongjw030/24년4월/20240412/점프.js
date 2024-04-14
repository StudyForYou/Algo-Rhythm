// 이진법으로 변환했을떄 1의 개수인듯? 
// 이렇게 생각한 이유: n나누기 2의 나머지를 카운팅, (n//2)나누기 2의 나머지를 카운팅... 해야 하는데 이게 이진법이랑 생긴게 똑같음.
function solution(n){
  let arr = n.toString(2).split("");
  return arr.reduce((acc, el)=>{
    return el==="1" ? acc+1 : acc;
  }, 0)
}
