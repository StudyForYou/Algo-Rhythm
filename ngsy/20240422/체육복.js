/** 체육복 Lv.2
 * https://school.programmers.co.kr/learn/courses/30/lessons/42862
 *
 * 여벌 체육복있는 학생이 도난당하는 상황(전체가 도난당했지만 여유분 있는 경우, 일부가 도난 당했지만 여유분이 있는경우 등)을 생각하지 않아서 정말 많은 테스트 케이스를 넣고 해보았다.
 * 문제에 정렬이란 말이 없다면, 정렬을 해주는 것이 좋다.
 *
 */
function solution(n, lost, reserve) {
  //오름차순 정렬
  lost.sort((a, b) => a - b);

  //자신은 도난 당하지 않았고, 체육복을 빌려줄 수 있는 학생들
  const reserve_students = reserve.filter((el) => !lost.includes(el));

  //자신도 도난 당했지만 학생들이 자신 체육복이 여유 분 있는 학생들
  const lost_students = reserve.filter((el) => lost.includes(el));

  //도난 당했지만 여유분 있는 학생은 lost 배열에서 제거
  for (let el of lost_students) {
    let student = lost.indexOf(el);
    if (student !== -1) lost.splice(student, 1);
  }

  //초기값 전체 인원에서 체육복 도난당한 사람 수 제외
  let answer = n - lost.length;

  for (let i = 0; i < lost.length; i++) {
    //도난당한 학생의 이전 번호 학생
    let first = reserve_students.indexOf(lost[i] - 1);
    //도난당한 학생의 다음 번호 학생
    let second = reserve_students.indexOf(lost[i] + 1);

    if (first !== -1) {
      answer++;
      //체육복을 빌려주게 되면 빌려줄수있는 배열에서 제외 (중복 방지)
      reserve_students.splice(first, 1);
      //빌려줬으면 다음 번호로 넘어가도록
      continue;
    }

    if (second !== -1) {
      answer++;
      reserve_students.splice(second, 1);
    }
  }

  return answer;
}
