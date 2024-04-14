function solution(n) {
  let nBinary = n.toString(2);
  let location_01 = nBinary.lastIndexOf("01");
  
  if (location_01>0){
    // 이진수n에 "01"이 존재한다면 즉 101010 1001 같은 경우
    // 1. 01 을 10으로 바꿔야 함.
    // 2. 10 뒤에 있는 나머지 101010... 문자에 대해, 000111 이런 식으로 정렬해준다.
    let newBinary = nBinary.slice(0, location_01) + "10" + nBinary.slice(location_01+2, nBinary.length).split("").sort((a, b)=>(a-b)).join("");
    return parseInt(newBinary, 2);
  }else{
    // 이진수n에 "01"이 없다면 즉, 11110000 이나 1000 같은 경우.
    if (nBinary.lastIndexOf("1") === 0){
      // 1이 한개밖에 없다면 다음 큰 수는 이진수n 뒤에 0이 붙은 꼴.
      let newBinary = nBinary + "0";
      return parseInt(newBinary, 2);
    }else{
      // 1이 여러 개라면 111000 꼴 -> 다음 큰 수는 맨 앞자리에 1을 두고 나머지 1들은 맨 뒤로 몰아두고, 가운데에 0으로 채워두는 꼴.
      // 다음 큰 숫자의 1의 개수
      let countOne = nBinary.lastIndexOf("1") + 1;
      // 다음 큰 숫자의 0의 개수
      let countZero = nBinary.length + 1 - countOne;
      let newBinary = "1" + (new Array(countZero)).fill(0).join("") + (new Array(countOne-1)).fill(1).join("");
      return parseInt(newBinary, 2);
    }
  }
}


console.log(solution(78))