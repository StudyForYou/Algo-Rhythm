/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/42748
 * @param {number[]} array
 * @param {number[][]} commands
 * @returns array의 수들을 commands의 각 수의 배열에서 [i,j,k]를 array의 i~j수를 오름차순 정렬해서 k번째를 리턴
 */
function solution(array, commands) {
  return commands.reduce((acc, cur) => {
    let [i, j, k] = cur;
    acc.push(array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]);
    return acc;
  }, []);
}
