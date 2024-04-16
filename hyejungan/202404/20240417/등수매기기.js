/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/120882
 * @param {number[][]} score
 * @returns 영어 점수와 수학 점수를 담은 2차원 정수 배열, 영어 수학 점수의 평균으로 매긴 등수를 담은 배열을 return
 */
function solution(score) {
  let average = score.map((s) => (s[0] + s[1]) / 2);

  let rank = 1;

  while (rank <= score.length) {
    let count = 0;
    let max = Math.max(...average);

    average.map((point, i) => {
      if (point === max) {
        count++;
        average[i] = "";
        score[i] = rank;
      }
    });
    rank += count;
  }
  return score;
}
