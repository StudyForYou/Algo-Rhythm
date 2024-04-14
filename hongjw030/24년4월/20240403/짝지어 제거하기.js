function solution(s){
  let arr = s.split("");
  let stack = [];
    
  arr.forEach((el, index)=>{
    if (stack.length === 0) stack.push(el);
    else {
      if (stack.at(-1) !== el) stack.push(el);
      else stack.pop();
    }
  })

  return stack.length == 0 ? 1 : 0;
}