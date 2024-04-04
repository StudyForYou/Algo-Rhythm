/**시저 암호 Lv.1
 * https://school.programmers.co.kr/learn/courses/30/lessons/12926
 *
 */
function solution(s, n) {
  //알파벳 배열 선언
  const alphabets = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  //알파벳 배열 마지막 인덱스
  const lastIndex = alphabets.length - 1;

  let answer = s.split("").reduce((acc, cur) => {
    //공백일 경우 그대로 공백을 acc에 넣도록
    if (cur === " ") {
      acc.push(cur);
    } else {
      //n거리 만큼 밀린 알파벳 인덱스 값
      let findIndex = alphabets.indexOf(cur.toUpperCase()) + n;
      //만약 마지막 인덱스보다 크다면 한바퀴 돌려야하기에 밀린  마지막 인덱스와 밀린 인덱스의 차를 넣어준다.
      findIndex = lastIndex < findIndex ? findIndex - lastIndex - 1 : findIndex;
      //대문자인지 소문자인지 판별하고 소문자이면 소문자로 변환해준다.(알파벳 배열은 기본이 대문자)
      const moveAlphabet =
        cur === cur.toUpperCase()
          ? alphabets[findIndex]
          : alphabets[findIndex].toLowerCase();
      acc.push(moveAlphabet);
    }
    return acc;
  }, []);

  return answer.join("");
}
