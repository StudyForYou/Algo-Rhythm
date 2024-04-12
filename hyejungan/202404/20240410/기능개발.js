/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/42586
 * @param {number[]} progresses 진행율
 * @param {number[]} speeds 속도
 * @returns 100%기준 진행한 진행율에서 남은 진도를 다음과 같은 속도로 진행할때 날마다 몇개의 진도가 완성되는지 리턴, 앞선 개발보다 먼저 출시할 순 없고 기다려야함.
 */
function solution(progresses, speeds) {
  //남은 진행률의 진행속도로 몇일걸리는지 배열로 나타냄.
  let days = [];
  
  for(let i = 0; i < progresses.length; i++) {
      days.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }
  
  let result = [];
  let count = 1;           //젤 앞선 개발을 기준으로 기본 1로 count
  let standard = days[0];

  for(let i = 1; i < days.length; i++) {
      if(standard >= days[i]) {           //앞선 개발보다 남은 기간이 작거나 같으면 같은날에 출시하니까 count ++
          count += 1
      } else {                            //앞선 개발보다 남은 기간이 많으면 다른날 출시하니까
          result.push(count);             //count해준거 푸시해주고
          count = 1;                      //새로 count해줌.
          standard = days[i];             //기준도 새로 잡음
      }
  } 
  result.push(count)                      //새로 잡은 기준이 마지막 배열인 경우 result에 push안되니까 반복문 끝난 나머지 count push해주기
  return result
}
