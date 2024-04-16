function solution(n, arr1, arr2) {
  let answer = [];

  arr1 = arr1.map((val) => val.toString(2).padStart(n, 0));
  arr2 = arr2.map((val) => val.toString(2).padStart(n, 0));

  for (let i = 0; i < arr1.length; i++) {
    let temp = "";
    for (let j = 0; j < arr1[i].length; j++) {
      if (arr1[i][j] === "1" || arr2[i][j] === "1") temp += "#";
      else temp += " ";
    }
    answer.push(temp);
  }

  return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
