// https://school.programmers.co.kr/learn/courses/30/lessons/1845
// 해시

function solution(nums) {
  // Set으로 종류 파악, 중복 제거
  const vonkemon = new Set(nums);
  // 종류 수 확인
  const num = vonkemon.size;
  // 몇마리 선택할지 확인
  const numSelect = nums.length / 2;

  return Math.min(num, numSelect);
}
