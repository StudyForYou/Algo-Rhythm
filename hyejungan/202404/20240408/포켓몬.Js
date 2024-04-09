/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/1845
 * @param {number[]} nums 
 * @returns nums 배열길이의 반인 수만큼 Nums에서 뽑아서 제출할때, 중복되지 않는것 중 가장 많이 뽑는 경우
 */

function solution(nums) {
  let n = nums.length / 2;
  let nl = [...new Set(nums)].length;
  
  if(n < nl) return n;
  else return nl
}