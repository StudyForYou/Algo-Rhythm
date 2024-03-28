function solution(my_string, overwrite_string, s) {
  return [
    my_string.slice(0, s),
    my_string.slice(s + overwrite_string.length),
  ].join(overwrite_string);
}

//추가풀이
function solution(my_string, overwrite_string, s) {
  const arr = my_string.split("");
  arr.splice(s, overwrite_string.length, overwrite_string);
  return arr.join("");
}
