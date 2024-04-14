// https://school.programmers.co.kr/learn/courses/30/lessons/12915
// ["sun", "bed", "car"]

function solution(strings, n) {
  return strings.sort((a, b) => {
    // n번째 문자가 다를 때
    // 비교를 통해 1, -1, 0 반환
    if (a[n] > b[n]) {
      return 1;
    } else if (a[n] < b[n]) {
      return -1;
    } else {
      // n번째 문자가 같을 때
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      } else {
        // 서로 완전히 똑같을 때, 비교 무의미
        return 0;
      }
    }
  });
}
