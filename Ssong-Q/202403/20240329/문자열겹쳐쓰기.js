function solution(my_string, overwrite_string, s) {
  let answer = "",
    arr = my_string.split("");

  arr.splice(s, overwrite_string.length, overwrite_string);

  answer = arr.join("");

  return answer;
}

console.log(solution("He11oWor1d", "lloWorl", 2));
