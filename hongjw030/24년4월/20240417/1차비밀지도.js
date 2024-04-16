// 카카오톡은 진짜 독특한 설정의 문제가 많은듯 아니 이렇게까지해서 비상금을 훔쳐야하나 ㅋㅋㅋㅋ
// 등수매기기보단 쉬웠음

function solution(n, arr1, arr2) {
  const decodedArr1 = arr1.map(el=>el.toString(2).padStart(n, "0"))
  const decodedArr2 = arr2.map(el=>el.toString(2).padStart(n, "0"))

  const decoded = decodedArr1.map((el, ind)=>{
    let line1 = el.split("");
    let line2 = decodedArr2[ind].split("");
    
    return line1.map((atom, ind)=>{
      return Number(atom) || Number(line2[ind]);
    }).join("");
  })

  return decoded.map(el=>{
    return el.replaceAll("1", "#").replaceAll("0", " ")
  })
}