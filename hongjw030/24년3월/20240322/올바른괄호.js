function solution(s){
  const arr = s.split("");
  const stack = [];

  for(let el of arr){

    if (el === ")"){
      if (stack.length === 0) {
        return false;
      };
      if (stack[stack.length -1] !== el) stack.pop();
      else stack.push(el);
    }
    else{
      if (stack.length <= 0) stack.push(el);
      else stack.push(el);
    }
  }

  return stack.length === 0;
}