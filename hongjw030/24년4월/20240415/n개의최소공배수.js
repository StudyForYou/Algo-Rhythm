// gcd 구하는법 까먹어서 시간 좀 걸린거 빼곤 무난

function gcd(a, b){
  let r = 0;
  while(b !==0){
    r = a%b;
    a=b;
    b=r;
  }return a;
}

function lcm(a, b){
  return (a*b) / gcd(a,b);
}

function solution(arr) {
  return arr.reduce((acc, el)=>{
    return lcm(acc, el);
  }, 1);
}