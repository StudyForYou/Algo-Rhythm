function solution(arr, k) {
  const answer = [];
  const set = new Set();

  arr.forEach(el=>{
    set.add(el);
  })

  set.forEach(el => {
    answer.push(el);
  })

  if (answer.length < k){
    const len = answer.length 
    for(let i = 0;i<k-len;i++){
      answer.push(-1);
    }return answer;
  }else{
    return answer.slice(0, k);
  }
}

// function solution(arr, k) {
//   // 1. set 객체를 만들 때 인자로 array를 주면 바로 set이 된다.
//   const set = new Set(arr);

//   // 2. answer array 객체에 set 원소를 다 집어넣는다.
//   // Array.from 메소드 말고 const answer = [...set] 이렇게 spread 문법도 쓸 수 있다.
//   const answer = Array.from(set);

//   // 3. answer array 길이를 확인한다.
//   return answer.length > k ? answer.slice(0, k) : answer.fill(0, answer.length-1, k)
// }