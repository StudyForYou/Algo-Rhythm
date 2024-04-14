const reverseWord = (str, first, second) => {
  let chunk = "";
  str.slice(first, second+1).split("").forEach(el=>{
    chunk = el + chunk;
  })
  let ans = str.slice(0, first) + chunk + str.slice(second+1, str.length);
  return ans;
}

function solution(my_string, queries) {
  var answer = my_string;
  queries.forEach(query=>{
    answer = reverseWord(answer, query[0], query[1]);
  })
  return answer;
}
