/** 등수 매기기 Lv.0
 * https://school.programmers.co.kr/learn/courses/30/lessons/120882
 *
 */
function solution(score) {
  //평균 구하기
  const average = score.map((el) => {
    [eng, math] = el;
    return (eng + math) / 2;
  });
  //배열 복사 및 오름차순 정렬
  const renk = [...average].sort((a, b) => b - a);

  //정렬된 renk에서 average에 요소를 찾아서 해당 인덱스 반환
  const answer = average.map((el) => renk.indexOf(el) + 1);
  return answer;
}
