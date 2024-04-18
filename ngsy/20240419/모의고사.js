/** 모의고사 Lv.2
 * https://school.programmers.co.kr/learn/courses/30/lessons/42840
 *
 *
 */
function solution(answers) {
  //1~3번까지 패턴 선언
  const human1 = [1, 2, 3, 4, 5];
  const human2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const human3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const score = [0, 0, 0];

  const answer = [];

  //answers를 기준으로 패턴을과 비교하며 정답 체크
  for (let i in answers) {
    if (answers[i] === human1[i % human1.length]) score[0]++;

    if (answers[i] === human2[i % human2.length]) score[1]++;

    if (answers[i] === human3[i % human3.length]) score[2]++;
  }

  //최고 점수
  const maxScore = Math.max(...score);

  for (let i = 0; i < score.length; i++) {
    //최고점수와 같을 경우 해당 인덱스를 넣어준다.
    if (score[i] === maxScore) {
      answer.push(i + 1);
    }
  }

  return answer;
}
