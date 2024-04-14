// ㅋㅋ 폰켓몬 번호로 구분한다니 웃기지않나여? 나와라 죄수번호 3번 석방이다 느낌남
// set 크기는 length 가 아니라 size 메소드라는 점이 헷갈렸던거 빼곤 그닥 어렵진 않았음.
function solution(nums) {
  const set = new Set(nums);
  return Math.min(Math.floor(nums.length /2), set.size);
}