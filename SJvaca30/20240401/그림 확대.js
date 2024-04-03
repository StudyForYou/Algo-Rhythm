// https://school.programmers.co.kr/learn/courses/30/lessons/181836
// ["x.x", ".x.", "x.x"]

// 방법1
function solution(picture, k) {
  let answer = picture.reduce((acc, curr) => {
    // 각 문자를 k번 반복하기
    let repText = "";
    for (let l = 0; l < curr.length; l++) {
      for (let i = 1; i <= k; i++) {
        repText += curr[l];
      }
    }
    // 각 행을 k번 반복하기
    for (let i = 1; i <= k; i++) {
      acc.push(repText);
    }
    return acc;
  }, []);
  return answer;
}

// 방법2
function solution(picture, k) {
  return picture.flatMap((arr) =>
    // k개의 빈 배열을 생성, 각 배열을 fill()로 채움.
    Array(k).fill(
      arr
        // "x.x"를 ["x", ".", "x"]로 변환
        .split("")
        // ["x", ".", "x"]를 ["xxx", "...", "xxx"]로 변환
        .map((char) => char.repeat(k))
        // ["xxx", "...", "xxx"]를 "xxx...xxx"로 변환
        .join("")
    )
  );
}