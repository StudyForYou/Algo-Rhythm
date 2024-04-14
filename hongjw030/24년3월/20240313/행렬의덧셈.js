function solution(arr1, arr2) {
  const answer = arr1.map((arr, arrind)=>{
    return arr.map((el, ind)=>  (el + arr2[arrind][ind]))
  })
  return answer;
}
