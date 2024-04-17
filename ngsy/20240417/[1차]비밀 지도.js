/** [1차] 비밀지도 Lv.1
 * https://school.programmers.co.kr/learn/courses/30/lessons/17681
 *
 */
function solution(n, arr1, arr2) {
  const map1 = arr1.map((el) => setMap(el, n));
  const map2 = arr2.map((el) => setMap(el, n));

  const answer = [];

  //1 : 벽(#) 0 : 공백(" ")
  for (let i = 0; i < map1.length; i++) {
    //map1을 기준으로 map2와 비교 하면서 한변을 구한다.
    const mapLine = [...map1[i]].reduce((acc, cur, idx) => {
      let part = "";
      //동일한 인덱스에서 map1 또는 map2의 자리가 1일 경우 벽(#)
      if (cur === "1" || map2[i][idx] === "1") part = "#";
      //map1 ,map2 둘다 0 일경우 공백(" ")
      if (cur === "0" && map2[i][idx] === "0") part = " ";
      acc += part;
      return acc;
    }, "");

    answer.push(mapLine);
  }

  return answer;
}
//이진수로 바꾸고 한변의 크기보다 자릿수가 적을 경우 0을 채워줌
const setMap = (val, n) => {
  const num = val.toString(2);
  const addCount = Math.abs(num.length - n);
  return "0".repeat(addCount) + num;
};
