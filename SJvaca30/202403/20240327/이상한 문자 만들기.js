//school.programmers.co.kr/learn/courses/30/lessons/12930

function solution(s) {
  let answer = "";
  const words = s.split(" "); // 공백을 기준으로 문자열을 분할하여 단어 배열을 생성합니다.

  for (let i = 0; i < words.length; i++) {
    let word = "";
    for (let j = 0; j < words[i].length; j++) {
      // 짝수번째 인덱스일 경우
      if (j % 2 === 0) {
        word += words[i][j].toUpperCase(); // 대문자로 변환하여 추가합니다.
      } else {
        word += words[i][j].toLowerCase(); // 소문자로 변환하여 추가합니다.
      }
    }
    answer += word + " "; // 단어를 공백으로 연결하여 결과 문자열에 추가합니다.
  }

  // 마지막 공백 제거
  return answer.slice(0, -1);
}
