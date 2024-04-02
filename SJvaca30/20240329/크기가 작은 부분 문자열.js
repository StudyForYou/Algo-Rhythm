//school.programmers.co.kr/learn/courses/30/lessons/147355

// 방법1
function solution(t, p) {
  const tLen = t.length;
  const pLen = p.length;

  // p 문자열을 숫자로 변환
  const pNum = parseInt(p);
  // p보다 작거나 같은 부분 문자열의 갯수를 세는 카운터
  let count = 0;

  // tLen - pLen만큼 비교 가능함
  for (let i = 0; i <= tLen - pLen; i++) {
    // 해당하는 부분 문자열 추출
    const subStr = t.substring(i, i + pLen);
    // 부분 문자열을 숫자로 변환
    const subNum = parseInt(subStr);

    // 부분 문자열의 숫자 값이 p의 숫자 값보다 작거나 같으면 카운터 증가
    if (subNum <= pNum) {
      count++;
    }
  }

  // p보다 작거나 같은 부분 문자열의 갯수 반환
  return count;
}


// 방법2
function solution(t, p) {
  let temp = "";
  let answer = 0;
  let tL = t.length
  let pL = p.length
  for( let i = 0; i <= tL-pL; i++) {
      temp = Number(t.slice(i,i+pL));
      if (temp <= Number(p)) {
          answer += 1
      }
  }
  return answer
}
