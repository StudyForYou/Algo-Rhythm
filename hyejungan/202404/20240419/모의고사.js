/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/42840
 * @param {number[]} answers 정답
 * @returns 수포자 1,2,3은 mathLoser와 같은 패턴으로 답을 선택하는데, 정답이 주어질때 가장높은 점수를 얻은 [수포자 번호를 리턴]
 */
function solution(answers) {
  let mathLoser = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  let score = [0, 0, 0];
  let turn = 0; // 문제 번호

  while (turn < answers.length) {
    for (i = 0; i < mathLoser.length; i++) {
      //수포자 1~3
      let order = turn % mathLoser[i].length; //패턴 보다 문제길이가 긴 경우 나머지를 활용하려고

      if (mathLoser[i][order] === answers[turn]) {
        score[i]++;
      }
    }
    turn++;
  }

  let result = [];
  let max = Math.max(...score);
  for (let i = 0; i < score.length; i++) {
    if (score[i] === max) result.push(i + 1);
  }
  return result;
}
