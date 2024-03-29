/**그림 확대 Lv.0
 * https://school.programmers.co.kr/learn/courses/30/lessons/12911
 *
 */
function solution(picture, k) {
  const answer = picture.reduce((acc, cur) => {
    //가로 문자열 요소를 배열로 만든다음 repeat을 활용해서 k배 만큼 문자를 늘린 후 다시 문자열로 변환.
    let row = cur
      .split("")
      .map((el) => el.repeat(k))
      .join("");
    //세로 k 만큼 배열에 추가.
    for (let i = 0; i < k; i++) acc.push(row);
    return acc;
  }, []);

  return answer;
}
