/*
이상하네 
for of문하면 4개다 시간초과, 
forEach하면 1개만 시간초과, 
map 쓰면 3개가 시간초과, 

...????? answer.at(-1) 말고 answer[answer.length-1] 하니까 걍 바로 통과되는디?
TODO - at메소드 시간복잡도 좀 알아봐야할듯
TODO - for of, forEach, map, reduce 각 시간 얼마나 걸리는지도 체크
*/

function solution(arr){
    const answer = [];
    arr.forEach(el=>{
      if (answer.length <= 0) answer.push(el);

      let temp = answer[answer.length -1];
      if (temp !== el){
        answer.push(el);
      }
    })
    return answer;
}