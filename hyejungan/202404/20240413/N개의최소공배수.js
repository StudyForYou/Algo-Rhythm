/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/12953
 * @param {number[]} arr 
 * @returns number 배열의 N개의 수의 최소공배수를 리턴
 */

function solution(arr) {
  let gop = arr.reduce((acc, cur) => {
    //모든값을 곱한값을 최소공배수로 생각하고 리턴한다.
    return acc * cur;
  });

  for (let i = Math.floor(Math.sqrt(gop)); i > 0; i--) {
    //곱한값의 약수중 배열의 모든수로 나눴을때 나머지가 0이되는 수 중 가장작은 수도 최소공배수다.
    if (arr.every((a) => (gop / i) % a === 0)) {
      gop = gop / i;
    }
  }
  return gop;
}
