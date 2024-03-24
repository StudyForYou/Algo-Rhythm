function solution(s) {
  // 이진변환 반복 횟수, 삭제된 0 개수
  let count = 0;
  let deletedZero = 0;
  
  // 이진변환 메소드
  // 아..!replace 메소드..
  const binaryChange = (str) => {
    let originLength = str.length;
    let noZeroStrLength = str.split("").map(el=>{
      if (el == "1") return el;
    }).join("").length;
    deletedZero += (originLength - noZeroStrLength);
    return noZeroStrLength.toString(2);
  }

  while(s !== '1'){
    s = binaryChange(s);
    count++;
  }

  return [count, deletedZero]; 
}

// solution("0111010")
console.log(solution("110010101001"))