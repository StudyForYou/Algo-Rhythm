/**
https://school.programmers.co.kr/learn/courses/30/lessons/181913

 */

function solution(my_string, queries) {
  // for을 사용하여 queries의 각 파라미터를 돌아줌.
  // queries의 각 파라미터에서 start와 end 인덱스를 추출
  for (const [start, end] of queries) {
    // my_string을 3등분하고, 뒤집은 다음, 다시 붙이는 작업
    my_string = my_string.slice(0, start) +
      my_string
        .slice(start, end + 1)
        .split("")
        .reverse()
        .join("") +
      my_string.slice(end + 1);
  }
  return my_string;
}
