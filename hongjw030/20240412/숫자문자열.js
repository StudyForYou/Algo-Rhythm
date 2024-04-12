// replaceAll 메소드가 신내림받은듯 생각나서 풀었지 아녔으면 못풀었을지도.
function solution(s) {
  const Eng = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight","nine"];
  let answer = s;
  Eng.forEach((el, ind)=>{
    answer = answer.replaceAll(el, String(ind));
  })
  return Number(answer);
}