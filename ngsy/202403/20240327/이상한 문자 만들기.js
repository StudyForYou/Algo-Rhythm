/**이상한 문자 만들기 Lv.1
 * https://school.programmers.co.kr/learn/courses/30/lessons/12930
 *
 *
 *
 *
 */
function solution(s) {
  const answer = s.split(" ").reduce((acc, cur) => {
    const word = cur
      .split("")
      .map((val, index) =>
        index % 2 === 0 ? val.toUpperCase() : val.toLowerCase()
      )
      .join("");

    acc.push(word);
    return acc;
  }, []);

  return answer.join(" ");
}
