/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/181858
 * @param {[num]} arr 무작위로 들어오는 수를 배열로
 * @param {num} k 출력시 원하는 배열의 길이
 * @returns 무작위로 들어오는 수중 중복되지 않게 K길이의 배열을 출력, 배열길이 만큼 안채워진 곳은 -1로 채우기
 */

function solution(arr, k) {
  return arr
    .reduce((acc, cur, i) => {
      if (!acc.includes(cur)) {
        acc.push(cur);
      }

      if (i === arr.length - 1 && acc.length < k) {
        while (acc.length < k) {
          acc.push(-1);
        }
      }
      return acc;
    }, [])
    .slice(0, k);
}
